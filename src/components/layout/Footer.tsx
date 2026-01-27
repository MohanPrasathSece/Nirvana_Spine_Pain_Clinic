import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-medical section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo-nobg.png"
                alt="Nirvana Spine & Pain Clinic Logo"
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-primary-foreground leading-tight">Nirvana</span>
                <span className="text-xs text-primary-foreground/70">Spine & Pain Clinic</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Expert spine care and pain management in Hyderabad.
              Dr. Vamshi provides personalized treatment for lasting relief.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Conditions", href: "/conditions" },
                { name: "Treatments", href: "/treatment" },
                { name: "Gallery", href: "/gallery" },
                { name: "Book Appointment", href: "/contact#book-appointment" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Conditions</h4>
            <ul className="space-y-3">
              {[
                { name: "Low Back Pain", href: "/conditions" },
                { name: "Neck Pain", href: "/conditions" },
                { name: "Sciatica", href: "/conditions" },
                { name: "Slip Disc / Disc Bulge", href: "/conditions" },
                { name: "Joint Pain", href: "/conditions" },
                { name: "Neuropathic Pain", href: "/conditions" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  123 Healthcare Avenue, Jubilee Hills, Hyderabad 500033
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919000004992"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91 90000 04992
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@nirvanaspine.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@nirvanaspine.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
              <p className="text-sm text-primary-foreground/50">
                © {new Date().getFullYear()} Nirvana Spine & Pain Clinic. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  to="/privacy"
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/50 mt-2">
              Developed by{" "}
              <a
                href="https://www.zyradigitals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium underline underline-offset-4"
              >
                Zyra Digitals
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
