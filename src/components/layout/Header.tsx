import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter,
  DrawerClose
} from "@/components/ui/drawer";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Conditions", href: "/conditions" },
  { name: "Treatments", href: "/treatment" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Site Navigation Element Schema (RARE)
    const navSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Site Navigation",
      "itemListElement": navigation.map((item, index) => ({
        "@type": "SiteNavigationElement",
        "position": index + 1,
        "name": item.name,
        "url": `https://nirvanapainclinic.com${item.href}`
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.className = "dynamic-nav-schema";
    script.text = JSON.stringify(navSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.querySelector(".dynamic-nav-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container-medical" aria-label="Global">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-nobg.png"
              alt="Nirvana Spine & Pain Clinic Logo"
              className="h-10 w-auto md:h-14"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold text-foreground leading-tight block">
                Nirvana
              </span>
              <span className="text-xs text-muted-foreground block">
                Spine & Pain Clinic
              </span>
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
              href="tel:+919392834992"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 93928 34992</span>
            </a>
            <Button asChild>
              <Link to="/contact#book-appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu (Drawer) */}
          <div className="lg:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground h-14 w-14"
                >
                  <Menu className="w-9 h-9" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[90vh] outline-none">
                <div className="absolute right-4 top-4 z-10">
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <X className="w-6 h-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </DrawerClose>
                </div>
                <DrawerHeader className="text-left pt-6 pb-2">
                  <DrawerTitle className="text-2xl font-heading font-bold text-center">
                    Menu
                  </DrawerTitle>
                  <DrawerDescription className="sr-only">
                    Navigation Links
                  </DrawerDescription>
                </DrawerHeader>

                <div className="p-4 space-y-2">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "bg-transparent text-foreground hover:bg-muted"
                          }`}
                      >
                        <span className="text-lg">{item.name}</span>
                        <ChevronRight
                          className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"
                            }`}
                        />
                      </Link>
                    );
                  })}
                </div>

                <DrawerFooter className="pt-2 pb-8 px-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-12 rounded-full text-lg shadow-md"
                  >
                    <Link to="/contact#book-appointment" onClick={() => setIsOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full rounded-full">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
