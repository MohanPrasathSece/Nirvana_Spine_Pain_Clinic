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
    // SNOMED-CT / ICD-10 Mappings
    const codeMap: Record<string, string> = {
      "Back Pain": "SNOMED-CT: 22253000, ICD-10: M54.5",
      "Neck Pain": "SNOMED-CT: 71181003, ICD-10: M54.2",
      "Sciatica & Leg Pain": "SNOMED-CT: 23056005, ICD-10: M54.3",
      "Slip Disc (Herniated Disc)": "SNOMED-CT: 258321008, ICD-10: M51.2",
      "Spinal Stenosis": "SNOMED-CT: 14760008, ICD-10: M48.0",
      "Joint & Arthritis Pain": "SNOMED-CT: 3723001, ICD-10: M19"
    };

    // Symptom Mappings (Rare Discovery Keywords)
    const symptomMap: Record<string, string[]> = {
      "Back Pain": ["lower back stiffness", "sharp back pain", "muscle spasms", "aching back", "difficulty standing"],
      "Neck Pain": ["upper back stiffness", "shooting shoulder pain", "neck immobility", "tension headache", "arm weakness"],
      "Sciatica & Leg Pain": ["leg numbness", "electric shock sensation", "burning leg pain", "calf tingling", "shooting pain in buttocks"],
      "Slip Disc (Herniated Disc)": ["pinched nerve pain", "sudden sharp pain", "limited range of motion", "disc bulge symptoms"],
      "Spinal Stenosis": ["leg heaviness while walking", "cramping in legs", "pain that improves while leaning forward"],
      "Joint & Arthritis Pain": ["swollen joints", "creaking knees", "morning stiffness", "limited joint movement", "hip grinding sensation"]
    };

    // Wikidata Universal Entity IDs
    const wikidataMap: Record<string, string> = {
      "Back Pain": "http://www.wikidata.org/entity/Q186356",
      "Neck Pain": "http://www.wikidata.org/entity/Q123456",
      "Sciatica & Leg Pain": "http://www.wikidata.org/entity/Q193633",
      "Slip Disc (Herniated Disc)": "http://www.wikidata.org/entity/Q551676",
      "Spinal Stenosis": "http://www.wikidata.org/entity/Q1048831",
      "Joint & Arthritis Pain": "http://www.wikidata.org/entity/Q191924"
    };

    // Wikidata Citations & Health Portals
    const citationMap: Record<string, string[]> = {
      "Back Pain": ["https://www.nhp.gov.in/disease/musculo-skeletal/back-pain", "http://www.wikidata.org/entity/Q186356"],
      "Neck Pain": ["https://www.nhp.gov.in/disease/musculo-skeletal/neck-pain", "http://www.wikidata.org/entity/Q123456"],
      "Sciatica & Leg Pain": ["https://www.nhp.gov.in/disease/neurological/sciatica", "http://www.wikidata.org/entity/Q193633"],
      "Slip Disc (Herniated Disc)": ["https://en.wikipedia.org/wiki/Spinal_disc_herniation", "http://www.wikidata.org/entity/Q551676"],
      "Spinal Stenosis": ["https://en.wikipedia.org/wiki/Spinal_stenosis", "http://www.wikidata.org/entity/Q1048831"],
      "Joint & Arthritis Pain": ["https://www.nhp.gov.in/disease/musculo-skeletal/arthritis", "http://www.wikidata.org/entity/Q191924"]
    };

    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
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
        description="Providing expert treatment for Sciatica, Slip Disc, Back Pain, and Neck Pain in Hyderabad. Advanced non-surgical pain management for lasting relief."
        keywords="Sciatica Treatment Hyderabad, Slip Disc Treatment Hyderabad, Back Pain Relief, Neck Pain Specialists Hyderabad"
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
