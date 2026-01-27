import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Spine specialist treating patient"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative container-medical py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 animate-fade-in">
            Welcome to Nirvana Spine & Pain Clinic
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Expert Spine Care.{" "}
            <span className="text-primary">Pain-Free Living.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience relief from chronic pain with Dr. Vamshi's specialized
            treatment. Advanced techniques for back pain, neck pain, and
            spine conditions in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="gap-2">
              <Link to="/contact#book-appointment">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+919000004992">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "3", label: "Years Experience" },
              { value: "1k+", label: "Patients Treated" },
              { value: "95%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
