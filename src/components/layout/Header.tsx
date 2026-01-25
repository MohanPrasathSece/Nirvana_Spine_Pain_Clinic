import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Conditions", href: "/conditions" },
  { name: "Treatments", href: "/treatment" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container-medical" aria-label="Global">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/nirvana logo bg removed.png"
              alt="Nirvana Spine & Pain Clinic Logo"
              className="h-10 w-auto md:h-14"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold text-foreground leading-tight block">Nirvana</span>
              <span className="text-xs text-muted-foreground block">Spine & Pain Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Button asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation */}
      {/* Modern Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col flex-1 items-center justify-center gap-8 -mt-20">
            <nav className="flex flex-col items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-heading font-semibold tracking-tight transition-colors duration-300 ${location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-6 mt-8">
              <Button size="lg" className="rounded-full px-8 text-lg h-12" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
