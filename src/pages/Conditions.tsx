import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import spineImg from "@/assets/spine-care.jpg";
import jointImg from "@/assets/condition-knee-pain.jpg";
import nerveImg from "@/assets/condition-sciatica.jpg";
import chronicImg from "@/assets/condition-back-pain.jpg";
import neckImg from "@/assets/condition-neck-pain.jpg";
import cancerImg from "@/assets/medical-team.jpg";
import specializedImg from "@/assets/condition-slip-disc.jpg";
import facialPainImg from "@/assets/facial pain.png";

const conditionSections = [
  {
    title: "Spine & Nerve Pain",
    image: spineImg,
    description: "Conditions affecting the vertebrae, discs, and nerves of the spinal column, often resulting in localized or radiating pain.",
    items: [
      "Low Back Pain",
      "Neck Pain",
      "Slip Disc / Disc Bulge",
      "Sciatica",
      "Cervical & Lumbar Spondylosis",
    ],
  },
  {
    title: "Joint & Musculoskeletal Pain",
    image: jointImg,
    description: "Pain arising from the joints and surrounding muscles or ligaments, frequently caused by wear, tear, or inflammation.",
    items: [
      "Knee Pain",
      "Shoulder Pain",
      "Hip Pain",
      "Elbow & Wrist Pain",
      "Sports Injuries",
    ],
  },
  {
    title: "Nerve-Related Pain",
    image: nerveImg,
    description: "Complex pain syndromes caused by damage or dysfunction within the nervous system itself.",
    items: [
      "Neuropathic Pain",
      "Diabetic Neuropathy",
      "Post-Herpetic Neuralgia",
      "Nerve Entrapment Syndrome",
    ],
  },
  {
    title: "Chronic Pain",
    image: chronicImg,
    description: "Persistent pain lasting beyond typical healing times, often requiring specialized multi-disciplinary management.",
    items: [
      "Myofascial Pain Syndrome",
      "Chronic Low Back Pain",
      "Failed Back Surgery Syndrome",
      "Post-Surgical Pain",
    ],
  },
  {
    title: "Head & Facial Pain",
    image: facialPainImg,
    description: "Debilitating conditions including chronic migraines and neuralgia that significantly impact daily functioning.",
    items: [
      "Migraine",
      "Tension-Type Headache",
      "Cervicogenic Headache",
      "Trigeminal Neuralgia",
    ],
  },
  {
    title: "Cancer & Palliative Pain",
    image: cancerImg,
    description: "Specialized care focusing on managing pain associated with cancer and its treatments to improve quality of life.",
    items: [
      "Cancer-Related Pain",
      "Treatment-Related Pain",
      "Advanced Stage Pain",
      "Palliative Pain Care",
    ],
  },
  {
    title: "Specialized Pain Conditions",
    image: specializedImg,
    description: "Complex and localized pain syndromes that require specific diagnostic and therapeutic expertise.",
    items: [
      "CRPS (Complex Regional Pain Syndrome)",
      "Pelvic Pain",
      "Tailbone (Coccyx) Pain",
      "Sacroiliac Joint Pain",
    ],
  },
];

const Conditions = () => {
  const medicalSchema = conditionSections.map(section => {
    // God-Tier Clinical Mappings (ICD-11 / SNOMED)
    const codeMap: Record<string, string> = {
      "Spine & Nerve Pain": "ICD-11: ME84.2, SNOMED-CT: 22253000",
      "Joint & Musculoskeletal Pain": "ICD-11: FA31.Z, SNOMED-CT: 3723001",
      "Nerve-Related Pain": "ICD-11: 8B92, SNOMED-CT: 23056005",
      "Chronic Pain": "ICD-11: MG30.0, SNOMED-CT: 82423001",
      "Head & Facial Pain": "ICD-11: 8E43.0, SNOMED-CT: 25064002",
      
      "Cancer & Palliative Pain": "ICD-11: MG30.1, SNOMED-CT: 404640003",
      "Specialized Pain Conditions": "ICD-11: 8E49, SNOMED-CT: 400003000"
    };

    // God-Tier Symptom Clusters for Discovery
    const symptomMap: Record<string, string[]> = {
      "Spine & Nerve Pain": ["Lumbago", "Spondylosis", "Radiculopathy", "Lower back stiffness", "Disc herniation symptoms"],
      "Joint & Musculoskeletal Pain": ["Arthralgia", "Osteoarthritis pain", "Joint effusion", "Synovitis"],
      "Nerve-Related Pain": ["Neuropathic burning", "Paresthesia", "Chronic neuralgia", "Nerve compression"],
      "Chronic Pain": ["Central sensitization", "Persistent musculoskeletal pain", "Intractable pain"],
      "Head & Facial Pain": ["Chronic migraine", "Trigeminal neuralgia shocks", "Cervicogenic headache"],
      "Cancer & Palliative Pain": ["Oncological pain management", "Nociceptive cancer pain"],
      "Specialized Pain Conditions": ["Complex Regional Pain Syndrome", "Coccygodynia", "SI Joint dysfunction"]
    };

    const wikidataMap: Record<string, string> = {
      "Spine & Nerve Pain": "http://www.wikidata.org/entity/Q186356",
      "Joint & Musculoskeletal Pain": "http://www.wikidata.org/entity/Q191924",
      "Nerve-Related Pain": "http://www.wikidata.org/entity/Q193633",
      "Chronic Pain": "http://www.wikidata.org/entity/Q1093108",
      "Head & Facial Pain": "http://www.wikidata.org/entity/Q7075",
      "Cancer & Palliative Pain": "http://www.wikidata.org/entity/Q1052304",
      "Specialized Pain Conditions": "http://www.wikidata.org/entity/Q17142422"
    };

    const citationMap: Record<string, string[]> = {
      "Spine & Nerve Pain": ["https://www.who.int/news-room/fact-sheets/detail/low-back-pain", "http://www.wikidata.org/entity/Q186356"],
      "Chronic Pain": ["https://www.iasp-pain.org/resources/terminology/", "http://www.wikidata.org/entity/Q1093108"],
      "Head & Facial Pain": ["https://ichd-3.org/", "http://www.wikidata.org/entity/Q7075"]
    };

    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "lastReviewed": "2026-02-01",
      "reviewedBy": { "@id": "https://nirvanapainclinic.com/#doctor" },
      "name": `Best ${section.title} clinic in Hyderabad`,
      "about": {
        "@type": "Place",
        "name": "Hyderabad",
        "sameAs": "http://www.wikidata.org/entity/Q1355"
      },
      "mentions": (citationMap[section.title] || []).map(url => ({ "@type": "Thing", "url": url })),
      "mainEntity": {
        "@type": "MedicalCondition",
        "name": section.title,
        "description": section.description,
        "code": codeMap[section.title] || "",
        "sameAs": wikidataMap[section.title] || "",
        "image": {
          "@type": "ImageObject",
          "url": `https://nirvanapainclinic.com/src/assets/condition-${section.title.toLowerCase().split(" ")[0]}.jpg`,
          "contentUrl": `https://nirvanapainclinic.com/src/assets/condition-${section.title.toLowerCase().split(" ")[0]}.jpg`,
          "locationCreated": {
            "@type": "Place",
            "name": "Jubilee Hills, Hyderabad",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 17.435171,
              "longitude": 78.411557
            }
          }
        },
        "author": { "@id": "https://nirvanapainclinic.com/#doctor" },
        "reviewedBy": { "@id": "https://nirvanapainclinic.com/#doctor" },
        "signOrSymptom": (symptomMap[section.title] || []).map(s => ({
          "@type": "MedicalSignOrSymptom",
          "name": s
        })),
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": section.title.includes("Spine") || section.title.includes("Back") || section.title.includes("Neck") ? "Spine" : "Joints"
        },
        "possibleTreatment": section.items.map(item => ({
          "@type": "MedicalIntervention",
          "name": item
        })),
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patients seeking non-surgical spine and pain relief",
          "geographicArea": "Hyderabad, Telangana"
        }
      }
    };
  });

  return (
    <Layout>
      <SEO
        title="Sciatica, Slip Disc & Back Pain Treatment in Hyderabad | Nirvana Spine"
        description="Comprehensive non-surgical treatment for Sciatica, Slip Disc, Back Pain, and Neck Pain in Hyderabad. Advanced pain management for lasting relief by Dr Vamshi Bharadwaj."
        keywords="sciatica treatment hyderabad, slip disc treatment hyderabad, back pain relief hyderabad, neck pain specialist hyderabad, spine clinic jubilee hills, best pain clinic hyderabad, non-surgical sciatica relief, trigeminal neuralgia hyderabad, CRPS treatment Telangana, failed back surgery syndrome relief, disc prolapse treatment without surgery"
        schema={medicalSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Conditions", item: "/conditions" }
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
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Our Expertise</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Conditions We Treat
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide comprehensive diagnostic and personalized treatment plans for a wide range of acute and chronic pain conditions, helping you return to an active, pain-free life.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Sections */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditionSections.map((section, index) => (
              <div
                key={section.title}
                className="bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={section.image}
                    alt={`${section.title} treatment at Nirvana Spine & Pain Clinic Hyderabad`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted-foreground group/item"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/40 mt-2 flex-shrink-0 group-hover/item:bg-primary transition-colors" />
                        <span className="text-sm md:text-base leading-snug group-hover/item:text-foreground transition-colors">
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
        </div>
        <div className="container-medical relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Find Relief Today
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
            Don't let chronic pain limit your potential. Schedule a thorough evaluation with our pain specialists to discover the root cause and effective treatment options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="gap-2 h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <a
              href="tel:+919392834992"
              className="text-white font-medium hover:underline flex items-center gap-2"
            >
              Call Us: +91 93928 34992
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conditions;
