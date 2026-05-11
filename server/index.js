require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const { z } = require("zod");
const { Resend } = require("resend");

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const app = express();
const port = process.env.PORT || 8005;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Zod Schema for validation
const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Location is required"),
  ageRange: z.string().optional().nullable(),
});

// Routes
app.post("/api/leads", async (req, res) => {
  try {
    // 1. Validate incoming data
    const validatedData = leadSchema.parse(req.body);

    // 2. Insert into Neon DB
    const query = `
      INSERT INTO leads (name, phone, email, location, age_range)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [
      validatedData.name,
      validatedData.phone,
      validatedData.email,
      validatedData.location,
      validatedData.ageRange || null,
    ];

    const result = await pool.query(query, values);

    // 3. Send email via Resend (if configured)
    if (resend) {
      try {
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        await resend.emails.send({
          from: `Clearform <${fromEmail}>`,
          to: [validatedData.email],
          subject: 'Thanks for reaching out — Clearform',
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
              <div style="text-align: center; padding: 30px 0;">
                <h1 style="color: #111827; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -1px;">Clearform</h1>
                <p style="color: #6b7280; font-size: 16px; margin-top: 5px;">The future of form analytics.</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                <h2 style="color: #111827; font-size: 24px; margin-top: 0; font-weight: 700;">Welcome, ${validatedData.name}! 🎉</h2>
                
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                  Thank you for getting in touch with <strong>Clearform</strong>. We&apos;re thrilled you reached out!
                </p>
                
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                  We noticed you're joining us from ${validatedData.location}. Spots are extremely limited, but we've securely saved your details and you're officially in line.
                </p>
                
                <div style="margin: 35px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px; border-left: 4px solid #111827;">
                  <p style="color: #111827; font-size: 16px; margin: 0; font-weight: 600;">
                    💡 What's next?
                  </p>
                  <p style="color: #4b5563; font-size: 15px; margin-top: 8px; margin-bottom: 0; line-height: 1.5;">
                    Our team will review your details and reply shortly with next steps for the pilot.
                  </p>
                </div>
                
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
                  Best regards,<br/>
                  <strong style="color: #111827;">The Clearform Team</strong>
                </p>
              </div>
              
              <div style="text-align: center; padding-top: 30px;">
                <p style="color: #9ca3af; font-size: 13px;">
                  © 2026 Clearform. All rights reserved.<br/>
                  Bengaluru, India
                </p>
              </div>
            </div>
          `
        });
      } catch (emailError) {
        console.error("Failed to send email via Resend:", emailError);
        // We don't throw here to ensure the user still gets a success response for form submission
      }
    }

    // 4. Send success response
    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error("Database error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/leads/export", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM leads ORDER BY created_at DESC");
    
    if (result.rows.length === 0) {
      return res.status(404).send("No leads found to export.");
    }

    // CSV Header
    const fields = Object.keys(result.rows[0]);
    let csv = fields.join(",") + "\n";

    // CSV Rows
    result.rows.forEach(row => {
      let rowString = fields.map(field => {
        let val = row[field];
        if (val === null || val === undefined) val = "";
        
        // Escape quotes
        val = val.toString().replace(/"/g, '""');
        
        // Wrap in quotes if it contains comma, quote, or newline
        if (val.includes(',') || val.includes('"') || val.includes('\\n')) {
          val = `"${val}"`;
        }
        return val;
      }).join(",");
      csv += rowString + "\n";
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; file_name=leads.csv");
    res.status(200).send(csv);
  } catch (error) {
    console.error("Error exporting leads:", error);
    res.status(500).json({ error: "Internal server error during export." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
