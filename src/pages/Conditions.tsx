import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import conditionBackPain from "@/assets/condition-back-pain.jpg";
import conditionNeckPain from "@/assets/condition-neck-pain.jpg";
import conditionSciatica from "@/assets/condition-sciatica.jpg";
import conditionSlipDisc from "@/assets/condition-slip-disc.jpg";
import conditionKneePain from "@/assets/condition-knee-pain.jpg";
import conditionSpineCare from "@/assets/spine-care.jpg";
import conditionDegenerative from "@/assets/slip-disc.jpg";
const conditions = [
  {
    title: "Chronic Back Pain",
    description:
      "Comprehensive treatment for persistent lower back pain caused by muscle strain, disc problems, arthritis, or spinal conditions. We identify the root cause and provide targeted relief.",
    symptoms: ["Persistent aching or stiffness", "Sharp localized pain", "Pain radiating to legs", "Difficulty standing or walking"],
    image: conditionBackPain,
  },
  {
    title: "Neck Pain & Cervical Disorders",
    description:
      "Expert care for neck pain, cervical spondylosis, and related conditions. Our treatments address the underlying issues for long-term relief and improved mobility.",
    symptoms: ["Neck stiffness", "Pain radiating to shoulders/arms", "Headaches", "Numbness or tingling"],
    image: conditionNeckPain,
  },
  {
    title: "Sciatica",
    description:
      "Specialized treatment for sciatic nerve pain that radiates from the lower back through the hips and down the legs. We offer both conservative and interventional approaches.",
    symptoms: ["Radiating leg pain", "Numbness or weakness", "Burning sensation", "Pain when sitting"],
    image: conditionSciatica,
  },
  {
    title: "Herniated Disc",
    description:
      "Advanced treatment for bulging or ruptured spinal discs that cause nerve compression. Our minimally invasive approaches provide effective relief with faster recovery.",
    symptoms: ["Arm or leg pain", "Numbness or tingling", "Muscle weakness", "Pain with movement"],
    image: conditionSlipDisc,
  },
  {
    title: "Spinal Stenosis",
    description:
      "Expert management of narrowed spinal canal that compresses nerves. We offer comprehensive treatment options from physical therapy to interventional procedures.",
    symptoms: ["Back pain", "Leg cramping", "Difficulty walking", "Balance problems"],
    image: conditionSpineCare,
  },
  {
    title: "Degenerative Disc Disease",
    description:
      "Specialized care for age-related disc degeneration causing chronic pain. Our multi-disciplinary approach helps manage symptoms and improve quality of life.",
    symptoms: ["Chronic low back pain", "Pain that worsens with sitting", "Stiffness", "Periods of severe pain"],
    image: conditionDegenerative,
  },
  {
    title: "Joint & Knee Pain",
    description:
      "Effective management of joint and knee pain through advanced interventional therapies and physical rehabilitation.",
    symptoms: ["Joint swelling", "Reduced range of motion", "Pain with activity", "Morning stiffness"],
    image: conditionKneePain,
  },
];

const Conditions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">Conditions We Treat</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Spine & Pain Conditions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Vamshi specializes in diagnosing and treating a wide range of
              spine conditions and chronic pain disorders with advanced, personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="section-padding">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition) => (
              <div key={condition.title} className="card-medical overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={condition.image}
                    alt={condition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {condition.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Common Symptoms:</p>
                    <ul className="space-y-1">
                      {condition.symptoms.map((symptom) => (
                        <li
                          key={symptom}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {symptom}
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Experiencing Any of These Symptoms?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Don't let pain control your life. Schedule a consultation with
            Dr. Vamshi to get an accurate diagnosis and personalized treatment plan.
          </p>
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <Link to="/contact">
              Book an Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Conditions;
