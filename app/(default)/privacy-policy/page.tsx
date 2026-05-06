export const metadata = { title: 'Privacy Policy' };

const sections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>This Privacy Policy explains how Clearform collects, processes, and protects data.</p>
        <p className="mt-3">Clearform helps teams collect structured feedback and improve response quality.</p>
        <p className="mt-3">Website: <a href="https://clearform.com" className="text-blue-600 hover:underline">https://clearform.com</a><br />Contact: <a href="mailto:support@clearform.com" className="text-blue-600 hover:underline">support@clearform.com</a></p>
      </>
    ),
  },
  {
    title: "2. Data Ownership",
    content: (
      <>
        <p>All feedback data collected using Clearform belongs to the customer. Clearform does not claim ownership over:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>User responses</li>
          <li>Form data</li>
          <li>Feedback content</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Role Under Data Protection Laws",
    content: (
      <>
        <p>For the purposes of GDPR and similar regulations:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>You are the Data Controller</li>
          <li>Clearform acts as the Data Processor</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data We Process",
    content: (
      <>
        <p>Clearform may process:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>User-submitted feedback</li>
          <li>Form responses</li>
          <li>Interaction metadata</li>
        </ul>
        <p className="mt-3">We do not intentionally collect sensitive personal data.</p>
      </>
    ),
  },
  {
    title: "5. Purpose of Processing",
    content: (
      <>
        <p>We process data only to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Improve response quality</li>
          <li>Structure feedback</li>
          <li>Generate actionable signals</li>
          <li>Provide product functionality</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. AI Processing",
    content: (
      <>
        <p>Clearform uses AI systems to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Evaluate response quality</li>
          <li>Suggest improvements</li>
          <li>Structure feedback</li>
        </ul>
        <p className="mt-3">We do not use your data for:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Advertising</li>
          <li>Profiling individuals</li>
          <li>Selling to third parties</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Data Access",
    content: <p>Clearform does not access or manually review your raw data. Processing is automated and limited to system functionality.</p>,
  },
  {
    title: "8. Data Storage and Security",
    content: (
      <>
        <p>We implement:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Encryption in transit and at rest</li>
          <li>Access controls</li>
          <li>Secure cloud infrastructure</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. International Data Transfers",
    content: (
      <>
        <p>If data is processed outside your country, we ensure appropriate safeguards, including:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Standard contractual protections</li>
          <li>Secure processing environments</li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Your Rights (GDPR and Similar Laws)",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Access your data</li>
          <li>Correct your data</li>
          <li>Request deletion</li>
          <li>Restrict processing</li>
          <li>Export your data</li>
        </ul>
        <p className="mt-3">Requests can be made via <a href="mailto:support@clearform.com" className="text-blue-600 hover:underline">support@clearform.com</a></p>
      </>
    ),
  },
  {
    title: "11. Data Retention",
    content: <p>Data is retained only as necessary to provide the service. You may request deletion at any time.</p>,
  },
  {
    title: "12. Subprocessors",
    content: (
      <>
        <p>We may use subprocessors for:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Hosting</li>
          <li>Storage</li>
          <li>AI processing</li>
        </ul>
        <p className="mt-3">All subprocessors follow standard security practices.</p>
      </>
    ),
  },
  {
    title: "13. Changes",
    content: <p>We may update this policy as the product evolves.</p>,
  },
  {
    title: "14. Contact",
    content: (
      <p>
        Clearform<br />
        Hyderabad, Telangana, India<br />
        Email: <a href="mailto:support@clearform.com" className="text-blue-600 hover:underline">support@clearform.com</a><br />
        Website: <a href="https://clearform.com" className="text-blue-600 hover:underline">https://clearform.com</a>
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Privacy Policy</h1>
      <p className="text-gray-400 mb-14 text-sm">Last updated: May 2026</p>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h2>
            <div className="text-gray-600 text-base leading-relaxed space-y-2">
              {s.content}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
