import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DoctorsHighlight from "@/components/home/DoctorsHighlight";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Best Pain Clinic in Hyderabad | Nirvana Spine & Pain Clinic | Dr Vamshi Bharadwaj"
        description="Nirvana Spine & Pain Clinic is the #1 top-rated pain management center in Kokapet, Hyderabad. Expert non-surgical treatment for back pain, sciatica, and slip disc."
        keywords="best pain clinic in hyderabad, best pain clinic in kokapet, spine specialist gandipet, back pain treatment hyderabad, sciatica treatment hyderabad, slip disc treatment gandipet, dr vamshi bharadwaj, nirvana spine and pain clinic hyderabad, non-surgical spine care, ozone discectomy hyderabad, stellate ganglion block, trigeminal neuralgia treatment hyderabad, epidural steroid injections kokapet"
        type="MedicalWebPage"
        breadcrumbs={[
          { name: "Home", item: "/" }
        ]}
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <DoctorsHighlight />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
