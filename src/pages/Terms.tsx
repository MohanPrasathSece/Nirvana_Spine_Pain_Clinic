import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                Last updated: January 2024
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Nirvana Spine & Pain Clinic website and 
                services, you agree to be bound by these Terms of Service. If you 
                do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Medical Disclaimer
              </h2>
              <p>
                The information provided on this website is for general informational 
                purposes only and should not be considered as medical advice. Always 
                consult with Dr. Vamshi or another qualified healthcare provider for 
                proper diagnosis and treatment.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Appointment Booking
              </h2>
              <p>
                When you book an appointment through our website, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Arrive on time for your scheduled appointment</li>
                <li>Notify us at least 24 hours in advance if you need to cancel or reschedule</li>
                <li>Pay for services rendered according to our payment policies</li>
              </ul>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Use of Website
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Copy, distribute, or modify any part of the website without permission</li>
              </ul>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, logos, and 
                graphics, is the property of Nirvana Spine & Pain Clinic and is 
                protected by copyright laws.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Limitation of Liability
              </h2>
              <p>
                Nirvana Spine & Pain Clinic shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use 
                of the website or services.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. 
                Changes will be effective immediately upon posting to the website.
              </p>

              <h2 className="text-2xl font-heading font-semibold text-foreground mt-8">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Email: info@nirvanaspine.com<br />
                Phone: +91 98765 43210<br />
                Address: 123 Healthcare Avenue, Jubilee Hills, Hyderabad 500033
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
