import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions that apply when you use Dobi Akasia's laundry and dry cleaning services.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last updated: September 10, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-6 w-full">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-gray-600 text-sm leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of Dobi
            Akasia&apos;s laundry, dry cleaning, and related services. By
            dropping off items, placing an order, or using our website, you
            agree to these Terms.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              1. Our Services
            </h2>
            <p>
              We provide laundry, dry cleaning, and fabric care services for
              individual and commercial customers, available through our
              outlets or by arranging pickup via WhatsApp, subject to
              availability.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              2. Pricing & Payment
            </h2>
            <p>
              Prices are as listed at our outlets or communicated at the time
              of booking, and may be updated from time to time. Payment is
              due upon collection of your items unless otherwise agreed for
              commercial or bulk contracts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              3. Turnaround Time
            </h2>
            <p>
              Estimated turnaround times are provided at drop-off but are not
              guaranteed, as processing may be affected by item condition,
              order volume, or unforeseen circumstances. We will notify you
              of any significant delays where possible.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              4. Customer Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Please check pockets and remove all valuables, cash, and personal items before handing over garments.</li>
              <li>Please inform our staff of any pre-existing damage, stains, or fabric sensitivities at the time of drop-off.</li>
              <li>Please provide accurate contact details so we can reach you regarding your order.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              5. Care & Liability
            </h2>
            <p>
              We take reasonable care in handling and processing every item
              using appropriate cleaning methods. However, some fabrics,
              trims, or pre-existing conditions may not withstand cleaning
              despite our best efforts. Our liability for any item that is
              lost or damaged while in our care is limited to a reasonable
              value based on the item&apos;s age and condition, and in no
              case will exceed a reasonable multiple of the cleaning charge
              for that item.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              6. Uncollected Items
            </h2>
            <p>
              Items not collected within a reasonable period after
              notification of completion may be subject to storage
              arrangements or handling in accordance with applicable law. We
              will make reasonable efforts to contact you before this
              occurs.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              7. Cancellations
            </h2>
            <p>
              Orders may be cancelled before processing has begun. Once an
              item has entered the cleaning process, it can no longer be
              cancelled or refunded.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              8. Prohibited Items
            </h2>
            <p>
              We reserve the right to decline items that are hazardous,
              excessively soiled beyond safe handling, or otherwise
              unsuitable for our cleaning processes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              9. Website Use
            </h2>
            <p>
              All content on this website, including text, images, and
              branding, is the property of Dobi Akasia and may not be
              reproduced without permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              10. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of Malaysia, and any
              disputes shall be subject to the exclusive jurisdiction of the
              Malaysian courts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              11. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              our services after changes are posted constitutes acceptance
              of the revised Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-dark-blue">
              12. Contact Us
            </h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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
