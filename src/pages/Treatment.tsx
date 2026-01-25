import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import treatmentSpineSurgery from "@/assets/treatment-spine-surgery.jpg";
import treatmentInjection from "@/assets/treatment-injection.jpg";
import treatmentPhysiotherapy from "@/assets/treatment-physiotherapy.jpg";

const treatments = [
  {
    title: "Epidural Steroid Injections",
    description:
      "Targeted injections to reduce inflammation and relieve pain caused by herniated discs, spinal stenosis, and other conditions affecting the spine.",
    benefits: [
      "Quick pain relief",
      "Minimally invasive",
      "Outpatient procedure",
      "Reduced inflammation",
    ],
    image: treatmentInjection,
  },
  {
    title: "Nerve Block Therapy",
    description:
      "Precise nerve blocks to interrupt pain signals and provide relief for chronic pain conditions, including facet joint pain and sacroiliac dysfunction.",
    benefits: [
      "Targeted pain relief",
      "Diagnostic value",
      "Long-lasting effects",
      "Minimal downtime",
    ],
    image: treatmentInjection,
  },
  {
    title: "Radiofrequency Ablation",
    description:
      "Advanced technique using heat to disable nerves causing chronic pain. Provides long-term relief for facet joint pain and other chronic conditions.",
    benefits: [
      "Long-lasting relief (6-12 months)",
      "Minimally invasive",
      "Quick recovery",
      "Repeatable procedure",
    ],
    image: treatmentSpineSurgery,
  },
  {
    title: "Spinal Cord Stimulation",
    description:
      "Neuromodulation therapy that uses electrical impulses to interrupt pain signals. Ideal for patients with chronic pain who haven't responded to other treatments.",
    benefits: [
      "Drug-free pain management",
      "Adjustable therapy",
      "Reversible treatment",
      "Proven effectiveness",
    ],
    image: treatmentSpineSurgery,
  },
  {
    title: "Physical Therapy & Rehabilitation",
    description:
      "Customized exercise programs and manual therapy to strengthen muscles, improve flexibility, and prevent future pain episodes.",
    benefits: [
      "Personalized programs",
      "Core strengthening",
      "Posture correction",
      "Long-term prevention",
    ],
    image: treatmentPhysiotherapy,
  },
  {
    title: "Trigger Point Injections",
    description:
      "Targeted injections to release tight muscle knots causing pain. Effective for myofascial pain syndrome and muscle-related back and neck pain.",
    benefits: [
      "Immediate relief",
      "Simple procedure",
      "Minimal side effects",
      "Improved mobility",
    ],
    image: treatmentInjection,
  },
];

const Treatment = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">Our Treatments</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Advanced Pain Management Treatments
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Vamshi offers cutting-edge interventional pain management procedures 
              using the latest techniques for effective, long-lasting relief.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section-padding">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.title} className="card-medical overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Key Benefits:</p>
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-medical text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Dr. Vamshi will evaluate your condition and recommend the most 
            effective treatment plan for your specific needs.
          </p>
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Treatment;
