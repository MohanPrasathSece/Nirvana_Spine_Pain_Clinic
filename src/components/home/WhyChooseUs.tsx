import { Shield, Users, Clock, Award } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const features = [
  {
    icon: Shield,
    title: "Expert Specialist",
    description: "Dr Vamshi Bharadwaj brings 3 years of specialized experience in spine and pain management.",
  },
  {
    icon: Award,
    title: "Advanced Treatments",
    description: "Latest interventional procedures and minimally invasive techniques.",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans tailored to your specific condition.",
  },
  {
    icon: Clock,
    title: "Quick Relief",
    description: "Many patients experience significant improvement within the first few sessions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-medical">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={clinicInterior}
              alt="Nirvana Spine & Pain Clinic Interior - Best Pain Treatment Facility in Kokapet, Hyderabad"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-4xl font-heading font-bold">1k+</p>
              <p className="text-sm">Patients Treated</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Your Journey to a Pain-Free Life Starts Here
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Nirvana Spine & Pain Clinic, we combine medical expertise with
              compassionate care. Dr Vamshi Bharadwaj and his team are dedicated to
              helping you achieve lasting relief from chronic pain.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
