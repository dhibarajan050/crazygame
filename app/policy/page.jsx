import Layout from "@/app/pageLayout/layout";

export default function PolicyPage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Your privacy is important to us. This page explains how information
            is handled when you use our gaming platform.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-gray-700 leading-relaxed">

          {/* Information Collection */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p>
              PlayArenaHub does not actively collect personal information from
              users unless it is voluntarily provided through contact forms
              or email communication. Most games on our platform can be
              played without creating an account or submitting personal data.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Cookies & Analytics
            </h2>
            <p>
              Our website may use cookies or similar technologies to improve
              website performance and understand how visitors interact with
              the platform. These cookies help us analyze traffic and enhance
              the user experience but do not personally identify users.
            </p>
          </section>

          {/* Third Party */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Third-Party Content
            </h2>
            <p>
              Games available on PlayArenaHub are officially embedded from
              <a
                href="https://gamemonetize.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 underline"
              >
                GameMonetize
              </a>
              and may include content from third-party developers. We do not
              own these games; we only distribute and showcase them on our
              platform via embedded iframe technology. Third-party providers may
              have their own privacy policies and data practices, which are
              outside our control.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Data Security
            </h2>
            <p>
              We take reasonable steps to protect our platform and ensure a
              safe browsing environment. However, no internet transmission or
              storage system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to
              request the removal of any information you have shared with us,
              please contact us through the contact page on our website or
              reach out to us directly via email at
              <a
                href="mailto:360digitalproducts.official@gmail.com"
                className="ml-1 text-blue-600 underline hover:text-blue-700"
              >
                360digitalproducts.official@gmail.com
              </a>
              .
            </p>
          </section>

        </div>

        {/* Last updated */}
        <div className="mt-16 text-sm text-gray-500">
          Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </Layout>
  );
}