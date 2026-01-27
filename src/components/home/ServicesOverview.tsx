import { Link } from "react-router-dom";
import {
  Activity,
  Syringe,
  Dumbbell,
  Stethoscope,
  Brain,
  Bone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bone,
    title: "Spine & Nerve Pain",
    description: "Expert care for low back pain, neck pain, slip disc, sciatica, and spondylosis.",
  },
  {
    icon: Activity,
    title: "Joint & MSK Pain",
    description: "Advanced relief for knee, shoulder, hip, elbow, wrist pain, and sports injuries.",
  },
  {
    icon: Brain,
    title: "Nerve-Related Pain",
    description: "Comprehensive management of neuropathic pain, diabetic neuropathy, and neuralgia.",
  },
  {
    icon: Stethoscope,
    title: "Chronic Pain Care",
    description: "Specialized treatment for myofascial pain and failed back surgery syndrome.",
  },
  {
    icon: Syringe,
    title: "Head & Facial Pain",
    description: "Effective interventions for migraines, tension headaches, and trigeminal neuralgia.",
  },
  {
    icon: Activity,
    title: "Advanced Procedures",
    description: "Minimally invasive RFA, nerve blocks, and image-guided injections.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Specialized Spine & Pain Treatments
          </h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of treatments for spine conditions
            and chronic pain, using the latest medical advances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-medical p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" asChild className="gap-2">
            <Link to="/treatment">
              View All Treatments
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
