import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DoctorsHighlight from "@/components/home/DoctorsHighlight";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
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
