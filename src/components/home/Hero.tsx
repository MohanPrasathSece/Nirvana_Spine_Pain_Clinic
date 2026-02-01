import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

import Counter from "@/components/ui/counter";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" itemScope itemType="https://schema.org/MedicalOrganization">
      <meta itemProp="name" content="Nirvana Spine & Pain Clinic" />
      <meta itemProp="description" content="Top rated spine clinic in Hyderabad offering advanced pain management by Dr Vamshi Bharadwaj." />
      <meta itemProp="address" content="Kokapet, Hyderabad" />
      <meta itemProp="telephone" content="+91 93928 34992" />
      <link itemProp="sameAs" href="https://www.facebook.com/profile.php?id=61586868845417" />
      <link itemProp="sameAs" href="https://www.instagram.com/nirvanapainclinic/" />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nirvana Spine & Pain Clinic - Best Pain Management Center in Hyderabad by Dr Vamshi Bharadwaj"
          className="w-full h-full object-cover"
          // @ts-ignore
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative container-medical py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in">
            Welcome to <span className="text-primary">Nirvana</span> Spine & Pain Clinic
          </h1>
          <p className="text-xl md:text-2xl font-bold text-muted-foreground mb-8 animate-fade-in tracking-tight" style={{ animationDelay: "0.1s" }}>
            Expert Spine Care. Pain-Free Living.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience relief from chronic pain with Dr Vamshi Bharadwaj's specialized
            treatment. Advanced techniques for back pain, neck pain, and
            spine conditions in Kokapet, Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="gap-2">
              <Link to="/contact#book-appointment">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent border-primary/20 hover:bg-primary/5">
              <a href="tel:+919392834992">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { label: "Treatments", value: "500", suffix: "+" },
              { label: "Patients", value: "1000", suffix: "+" },
              { label: "Success Rate", value: "95", suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  <Counter value={parseInt(stat.value)} suffix={stat.suffix} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
