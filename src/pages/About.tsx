import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Shield, Target, Eye, Heart, Award, GraduationCap } from "lucide-react";
const doctorPortrait = "/image/vamshiimage.png";
import clinicInterior from "@/assets/clinic.jpg";
import Counter from "@/components/ui/counter";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with empathy, dignity, and respect.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all we do.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in patient care and outcomes.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We embrace new technologies and treatments to improve care.",
  },
];

const stats = [
  { value: 3, label: "Years of Experience", suffix: "" },
  { value: 1000, label: "Patients Treated", suffix: "+" },
  { value: 95, label: "Success Rate", suffix: "%" },
  { value: 1, label: "Dedicated Specialist", suffix: "" },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Dr Vamshi Bharadwaj | Best Spine Specialist in Hyderabad"
        description="Learn about Dr Vamshi Bharadwaj, a leading spine and pain management specialist in Hyderabad. Focused on interventional pain techniques for chronic relief."
        keywords="Dr Vamshi Bharadwaj, Spine Specialist Hyderabad, Pain Management Expert Hyderabad, Nirvana Spine Clinic Founders"
        type="AboutPage"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" }
        ]}
      />
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Spine & Pain Specialists in Hyderabad
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nirvana Spine & Pain Clinic is dedicated to helping patients
              overcome chronic pain and spine conditions with expert care and
              advanced treatment options.
            </p>
          </div>
        </div>
      </section>

      {/* Overview with Doctor */}
      <section className="section-padding">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Meet Dr Vamshi Bharadwaj
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dr Vamshi Bharadwaj is a renowned spine and pain management specialist
                  in Hyderabad with 3 years of experience. He has dedicated
                  his career to helping patients find relief from chronic pain
                  through advanced interventional techniques.
                </p>
                <p>
                  After completing his medical education and fellowship in pain
                  management, Dr Vamshi Bharadwaj established Nirvana Spine & Pain Clinic
                  to provide world-class care to patients suffering from spine
                  conditions and chronic pain.
                </p>
                <p>
                  His patient-centered approach combines the latest medical
                  advances with personalized treatment plans, ensuring each
                  patient receives the care best suited to their unique condition.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-foreground">MBBS, MD (Anesthesiology), Fellowship in Pain Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Certified in Interventional Pain Management</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img
                src={doctorPortrait}
                alt="Dr Vamshi Bharadwaj - Spine Specialist"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-accent">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-medical p-8">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide exceptional spine and pain care that restores quality
                of life. We are committed to accurate diagnosis, effective treatment,
                and compassionate care that addresses the root cause of pain.
              </p>
            </div>
            <div className="card-medical p-8">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be Hyderabad's most trusted spine and pain management clinic,
                recognized for clinical excellence, innovative treatments, and
                helping every patient achieve a pain-free life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary">
        <div className="container-medical">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-medical">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2">Our Core Values</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-medical p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Facility */}
      <section className="section-padding bg-secondary">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={clinicInterior}
                alt="Nirvana Spine & Pain Clinic Facility"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-primary font-medium mb-2">Our Facility</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Modern Clinic in Hyderabad
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art clinic in Hyderabad is designed with
                patient comfort in mind. Equipped with the latest medical
                technology, we provide comprehensive diagnostic and treatment
                services for all spine and pain conditions.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced Diagnostic Equipment",
                  "Comfortable Treatment Rooms",
                  "Modern Procedure Suite",
                  "Dedicated Physiotherapy Area",
                  "Easy Parking & Accessibility",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions CTA */}
      <section className="section-padding">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Conditions We Treat
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert care for a wide range of spine and pain conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              "Spine & Nerve Pain",
              "Joint & MSK Pain",
              "Nerve-Related Pain",
              "Chronic Pain",
              "Head & Facial Pain",
              "Cancer Pain Care",
              "Back Surgery Issues",
              "Specialized Pain"
            ].map((condition) => (
              <div key={condition} className="bg-accent/50 p-4 rounded-xl border border-border/50">
                <p className="font-medium text-foreground">{condition}</p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/conditions">View All Conditions & Treatments</Link>
          </Button>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-medical">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Ready to Start Your Journey to Pain-Free Living?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Schedule a consultation with Dr Vamshi Bharadwaj and take the first step towards lasting relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link to="/contact#book-appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+919392834992">Call +91 93928 34992</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
