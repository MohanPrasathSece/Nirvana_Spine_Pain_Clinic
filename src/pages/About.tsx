import Layout from "@/components/layout/Layout";
import { Shield, Target, Eye, Heart, Award, GraduationCap } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

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
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Patients Treated" },
  { value: "95%", label: "Success Rate" },
  { value: "1", label: "Dedicated Specialist" },
];

const About = () => {
  return (
    <Layout>
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
                Meet Dr. Vamshi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Vamshi is a renowned spine and pain management specialist 
                  in Hyderabad with over 15 years of experience. He has dedicated 
                  his career to helping patients find relief from chronic pain 
                  through advanced interventional techniques.
                </p>
                <p>
                  After completing his medical education and fellowship in pain 
                  management, Dr. Vamshi established Nirvana Spine & Pain Clinic 
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
                alt="Dr. Vamshi - Spine Specialist"
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
              <p className="text-muted-foreground leading-relaxed">
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
              <p className="text-muted-foreground leading-relaxed">
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
                  {stat.value}
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
              <p className="text-muted-foreground mb-6 leading-relaxed">
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
    </Layout>
  );
};

export default About;
