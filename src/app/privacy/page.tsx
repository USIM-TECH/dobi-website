import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Dobi Akasia collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-soft-bg">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white pt-36 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: September 10, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-6 w-full">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-gray-600 text-sm leading-relaxed">
          <p>
            Dobi Akasia (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is
            committed to protecting the personal data you share with us when
            you visit our website, use our services, or contact us via
            WhatsApp, phone, email, or in person at our outlets. This Privacy
            Policy explains what information we collect, how we use it, and
            the choices you have.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Name, phone number, and email address you provide when contacting us, submitting an inquiry, or booking a service.</li>
              <li>Order and service details, such as the items dropped off, service type, and collection preferences.</li>
              <li>Address information when arranging pickup or delivery.</li>
              <li>Messages exchanged with us through WhatsApp or our contact form.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Process and fulfil your laundry and dry cleaning orders.</li>
              <li>Communicate with you about your order status, inquiries, or promotions.</li>
              <li>Improve our services, outlets, and customer experience.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              3. Sharing of Information
            </h2>
            <p>
              We do not sell your personal data. We may share limited
              information with trusted service providers who help us operate
              our business (for example, delivery or messaging services),
              solely for the purpose of fulfilling your order. We may also
              disclose information where required by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              4. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to
              provide our services, maintain order records, and comply with
              applicable legal requirements, after which it is securely
              deleted or anonymized.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              5. Your Rights
            </h2>
            <p>
              In accordance with Malaysia&apos;s Personal Data Protection Act
              2010 (PDPA), you have the right to access, correct, or request
              deletion of your personal data held by us. To exercise these
              rights, please contact us using the details below.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              6. Data Security
            </h2>
            <p>
              We take reasonable technical and organizational measures to
              protect your personal data against unauthorized access, loss,
              or misuse.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with a revised &quot;Last
              updated&quot; date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your personal data, please contact us:
            </p>
            <ul className="space-y-1.5">
              <li>
                <span className="font-semibold text-dark-blue">Email:</span>{" "}
                dobiakasia@gmail.com
              </li>
              <li>
                <span className="font-semibold text-dark-blue">Phone:</span>{" "}
                011-3140 4946 / 016-440 4636
              </li>
              <li>
                <span className="font-semibold text-dark-blue">Address:</span>{" "}
                B8-G, Ground Floor, Acacia Avenue, Jalan Jati 9, 71800 Nilai,
                Negeri Sembilan
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
