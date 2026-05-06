export const metadata = { title: 'Terms of Service' };

const sections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>These Terms govern your use of Clearform.</p>
        <p className="mt-3">By purchasing or using the Clearform Pilot, you agree to these Terms.</p>
      </>
    ),
  },
  {
    title: "2. Service Description",
    content: (
      <>
        <p>Clearform provides:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Structured feedback collection tools</li>
          <li>AI-assisted response improvement</li>
          <li>Feedback signal generation</li>
        </ul>
        <p className="mt-3">The Pilot includes:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Up to 300 responses</li>
          <li>Unlimited forms</li>
          <li>Up to 5 users</li>
          <li>AI features and guided support</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Pricing and Access",
    content: (
      <>
        <p>The Pilot is:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>A one-time purchase</li>
          <li>No subscription</li>
          <li>No time limit</li>
        </ul>
        <p className="mt-3">Usage is limited to defined response volume.</p>
      </>
    ),
  },
  {
    title: "4. Usage Limits",
    content: (
      <>
        <p>You agree to use the platform within:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>300 response limit</li>
          <li>Platform constraints</li>
        </ul>
        <p className="mt-3">Additional usage may require upgrade.</p>
      </>
    ),
  },
  {
    title: "5. Acceptable Use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Use the service for unlawful purposes</li>
          <li>Submit harmful or malicious content</li>
          <li>Attempt to disrupt system functionality</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Responsibility",
    content: (
      <>
        <p>You are responsible for:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>The data you collect</li>
          <li>Compliance with applicable laws</li>
          <li>Informing your users about data usage</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <>
        <p>Clearform retains all rights to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Software</li>
          <li>Platform</li>
          <li>AI systems</li>
        </ul>
        <p className="mt-3">You retain ownership of your data.</p>
      </>
    ),
  },
  {
    title: "8. No Guarantees",
    content: (
      <>
        <p>Clearform provides tools to improve feedback quality. We do not guarantee:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Specific outcomes</li>
          <li>Business results</li>
          <li>Error-free operation</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <>
        <p>Clearform is not liable for:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Business losses</li>
          <li>Decisions made using feedback</li>
          <li>Indirect or consequential damages</li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Termination",
    content: (
      <>
        <p>You may stop using the service at any time. We may suspend access in case of misuse.</p>
      </>
    ),
  },
  {
    title: "11. Governing Law",
    content: <p>These Terms are governed by the laws of India. Jurisdiction: Hyderabad, Telangana.</p>,
  },
  {
    title: "12. Contact",
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

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Terms of Service</h1>
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
