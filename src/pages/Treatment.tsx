import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

import spineTreatImg from "@/assets/treatment-spine-care.jpg";
import jointTreatImg from "@/assets/treatment-injection.jpg";
import nerveTreatImg from "@/assets/treatment-nerve-block.jpg";
import therapyImg from "@/assets/therapy.jpg";
import cancerTreatImg from "@/assets/surgery.jpg";
import advancedTreatImg from "@/assets/diagnostic.jpg";
import headacheImg from "@/assets/headache.png";

const treatmentSections = [
  {
    title: "Spine Pain Treatments",
    image: spineTreatImg,
    description: "Minimally invasive injections and ablation techniques designed to target spinal nerves and joints directly at the source of pain.",
    items: [
      "Epidural Steroid Injection",
      "Selective Nerve Root Block",
      "Facet Joint Injection",
      "Medial Branch Block",
      "Radiofrequency Ablation (RFA)",
      "Sacroiliac Joint Injection",
    ],
  },
  {
    title: "Joint Pain Treatments",
    image: therapyImg,
    description: "Precise, image-guided injections to reduce inflammation and restore mobility in both major and minor joints throughout the body.",
    items: [
      "Knee Joint Injection",
      "Shoulder Injection",
      "Hip Joint Injection",
      "Elbow & Wrist Injection",
      "Ultrasound-Guided Injections",
    ],
  },
  {
    title: "Nerve Pain Treatments",
    image: nerveTreatImg,
    description: "Targeted blocks and specialized therapeutic interventions to interrupt the transmission of chronic or acute nerve pain signals.",
    items: [
      "Nerve Blocks for Neuropathic Pain",
      "Stellate Ganglion Block",
      "Trigeminal Nerve Block",
      "Intercostal Nerve Block",
      "Peripheral Nerve Blocks",
    ],
  },
  {
    title: "Headache & Facial Pain Treatments",
    image: headacheImg,
    description: "Advanced interventional procedures provide long-term relief from chronic migraines and complex facial neuralgia conditions.",
    items: [
      "Migraine Injections",
      "Occipital Nerve Block",
      "Trigeminal Neuralgia Interventions",
    ],
  },
  {
    title: "Cancer & Palliative Treatments",
    image: cancerTreatImg,
    description: "Highly specialized nerve blocks and pain management protocols specifically designed for patients in oncology and palliative care.",
    items: [
      "Diagnostic & Therapeutic Nerve Blocks",
      "Neurolytic Blocks",
      "Celiac Plexus Block",
      "Superior Hypogastric Block",
      "Intrathecal Pain Management",
    ],
  },
  {
    title: "Advanced Pain Procedures",
    image: advancedTreatImg,
    description: "Cutting-edge, image-guided technological interventions using radiofrequency energy to provide durable and non-surgical pain relief.",
    items: [
      "Radiofrequency Ablation (RFA)",
      "Pulsed RFA",
      "Ultrasound-Guided Procedures",
      "Image-Guided Injections",
    ],
  },
];

const Treatment = () => {
  const treatmentSchema = treatmentSections.map(section => {
    // SNOMED-CT codes for procedures
    const codeMap: Record<string, string> = {
      "Epidural Injections": "SNOMED-CT: 230862001",
      "Nerve Blocks": "SNOMED-CT: 50731000",
      "Radiofrequency Ablation": "SNOMED-CT: 444315007",
      "Physiotherapy & Rehabilitation": "SNOMED-CT: 91251008"
    };

    // Wikidata codes for procedures
    const wikidataMap: Record<string, string> = {
      "Epidural Injections": "http://www.wikidata.org/entity/Q610996",
      "Nerve Blocks": "http://www.wikidata.org/entity/Q699661",
      "Radiofrequency Ablation": "http://www.wikidata.org/entity/Q2126442",
      "Physiotherapy & Rehabilitation": "http://www.wikidata.org/entity/Q211116"
    };

    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": section.title,
      "description": section.description,
      "code": codeMap[section.title] || "",
      "sameAs": wikidataMap[section.title] || "",
      "author": { "@id": "https://nirvanapainclinic.com/#doctor" },
      "reviewedBy": { "@id": "https://nirvanapainclinic.com/#doctor" },
      "procedureType": {
        "@type": "MedicalSpecialty",
        "name": "Interventional Pain Management"
      },
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Pain Management"
      },
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "People suffering from chronic back, neck, or joint pain",
        "geographicArea": "Hyderabad, Telangana"
      }
    };
  });

  return (
    <Layout>
      <SEO
        title="Non-Surgical Spine Care & Pain Procedures in Hyderabad | Nirvana Spine"
        description="Advanced non-surgical procedures for spine and joint pain in Hyderabad. Minimally invasive treatments including RFA, Nerve Blocks, and Epidural Injections."
        keywords="Pain Management Procedures Hyderabad, Non-Surgical Spine Treatment, RF Ablation Hyderabad, Nerve Block Treatment"
        schema={treatmentSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Treatments", item: "/treatment" }
        ]}
      />
      {/* Hero */}
      <section className="bg-secondary section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -ml-32 -mb-32" />
        </div>
        <div className="container-medical relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Our Procedures</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Treatments & Procedures
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a comprehensive range of advanced, minimally invasive interventional procedures designed to target pain at its source and promote fast recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Sections */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentSections.map((section, index) => (
              <div
                key={section.title}
                className="bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={section.image}
                    alt={`${section.title} procedure at Nirvana Spine & Pain Clinic Hyderabad`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-24 transition-all mb-4" />
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="container-medical relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Take the First Step to Recovery
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
            Every patient's pain is unique. Schedule a consultation to discuss which interventional procedure is right for you.
          </p>
          <Button size="lg" variant="secondary" asChild className="gap-2 h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            <Link to="/contact">
              Schedule Your Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Treatment;
