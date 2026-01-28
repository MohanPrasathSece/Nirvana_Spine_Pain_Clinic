import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-medical text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Don't Let Pain Control Your Life
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Take the first step towards a pain-free life. Schedule a consultation
          with Dr Vamshi Bharadwaj today and discover personalized treatment options.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <Link to="/contact#book-appointment">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <a href="tel:+919000004992">
              <Phone className="w-5 h-5" />
              +91 90000 04992
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
