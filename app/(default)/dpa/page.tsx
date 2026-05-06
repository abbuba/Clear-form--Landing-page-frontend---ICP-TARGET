export const metadata = { title: 'Data Processing Agreement' };

const sections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>This Data Processing Agreement applies to Clearform&apos;s processing of personal data.</p>
        <p className="mt-3">You act as the Data Controller. Clearform acts as the Data Processor.</p>
      </>
    ),
  },
  {
    title: "2. Scope",
    content: (
      <>
        <p>Clearform processes data to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Improve feedback quality</li>
          <li>Structure responses</li>
          <li>Generate actionable signals</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Types of Data",
    content: (
      <>
        <p>May include:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Feedback text</li>
          <li>Form responses</li>
          <li>Metadata</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Processing Instructions",
    content: (
      <>
        <p>Clearform processes data only based on:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Customer instructions</li>
          <li>Product functionality</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Security Measures",
    content: (
      <>
        <p>We implement:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Encryption</li>
          <li>Access controls</li>
          <li>Secure infrastructure</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Subprocessors",
    content: (
      <>
        <p>We may use subprocessors for:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Cloud hosting</li>
          <li>Storage</li>
          <li>AI processing</li>
        </ul>
        <p className="mt-3">All subprocessors meet industry standards.</p>
      </>
    ),
  },
  {
    title: "7. Confidentiality",
    content: <p>All data is treated as confidential.</p>,
  },
  {
    title: "8. Data Subject Rights",
    content: (
      <>
        <p>Clearform supports the Controller in handling:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Access requests</li>
          <li>Deletion requests</li>
          <li>Data portability</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Data Breach Notification",
    content: <p>In the event of a data breach, we will notify affected customers without undue delay.</p>,
  },
  {
    title: "10. Data Retention and Deletion",
    content: (
      <>
        <p>Data is retained only as necessary. Upon request:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Data can be deleted</li>
          <li>Processing will cease</li>
        </ul>
      </>
    ),
  },
  {
    title: "11. International Transfers",
    content: (
      <>
        <p>Where applicable, we ensure:</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Secure transfers</li>
          <li>Standard safeguards</li>
        </ul>
      </>
    ),
  },
  {
    title: "12. Governing Law",
    content: <p>This agreement is governed by Indian law.</p>,
  },
  {
    title: "13. Contact",
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

export default function DpaPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Data Processing Agreement</h1>
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
