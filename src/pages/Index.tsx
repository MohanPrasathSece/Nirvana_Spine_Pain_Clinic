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
        description="Nirvana Spine & Pain Clinic is the #1 rated pain management center in Hyderabad. Specialized in non-surgical treatment for back pain, neck pain, sciatica, slip disc, and chronic pain by Dr Vamshi Bharadwaj."
        keywords="Best Pain Clinic in Hyderabad, Top Pain Specialist Hyderabad, Spine Clinic Hyderabad, Back Pain Treatment Hyderabad, Sciatica Relief Hyderabad, Dr Vamshi Bharadwaj"
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
