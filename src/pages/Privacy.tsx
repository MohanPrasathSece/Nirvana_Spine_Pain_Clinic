import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                Last updated: January 2024
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Introduction
              </h2>
              <p>
                Nirvana Spine & Pain Clinic ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Information We Collect
              </h2>
              <p>We may collect information about you in various ways, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information you provide when booking appointments (name, email, phone number)</li>
                <li>Medical information related to your treatment</li>
                <li>Information about your device and how you use our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our medical services</li>
                <li>Process appointment requests and communicate with you</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect the safety and security of our patients</li>
              </ul>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal
                information. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: info@nirvanaspine.com<br />
                Phone: +91 90000 04992<br />
                Address: 123 Healthcare Avenue, Jubilee Hills, Hyderabad 500033
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
