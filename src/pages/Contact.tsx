import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, Send, Calendar, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const faqs = [
  {
    question: "What conditions does Dr Vamshi Bharadwaj treat?",
    answer: "Dr Vamshi Bharadwaj specializes in treating chronic back pain, neck pain, sciatica, herniated discs, spinal stenosis, degenerative disc disease, and other spine-related conditions. He also treats joint pain and various chronic pain conditions.",
  },
  {
    question: "What is the first consultation like?",
    answer: "During your first visit, Dr Vamshi Bharadwaj will review your medical history, perform a thorough physical examination, and may order diagnostic tests if needed. He will then discuss your diagnosis and recommend a personalized treatment plan.",
  },
  {
    question: "Are the treatments painful?",
    answer: "Most treatments are minimally invasive and performed under local anesthesia. While you may feel slight pressure during procedures, significant pain is rare. Dr Vamshi Bharadwaj ensures patient comfort is a priority throughout all treatments.",
  },
  {
    question: "How long do the treatments take?",
    answer: "Most procedures are outpatient and take 15-30 minutes. You can typically return home the same day. Recovery time varies depending on the treatment, but most patients can resume normal activities within 24-48 hours.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer: "No referral is needed. You can directly book an appointment with Dr Vamshi Bharadwaj through our contact form, phone, or by visiting our clinic in Hyderabad.",
  },
  {
    question: "What insurance do you accept?",
    answer: "We accept most major insurance plans. Please contact our clinic for specific information about your insurance coverage. We also offer flexible payment options for self-pay patients.",
  },
];

const Contact = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "author": { "@id": "https://nirvanapainclinic.com/#doctor" },
    "reviewedBy": { "@id": "https://nirvanapainclinic.com/#doctor" },
    "datePublished": "2024-01-01",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    date: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request submitted! We'll confirm your booking shortly.");
    setAppointmentForm({
      name: "",
      email: "",
      phone: "",
      condition: "",
      date: "",
      message: "",
    });
  };

  return (
    <Layout>
      <SEO
        title="Contact Us | Book Appointment at Best Pain Clinic in Hyderabad"
        description="Book your consultation with Dr Vamshi Bharadwaj at Nirvana Spine & Pain Clinic, the leading pain management center in Hyderabad. Visit us for expert spine care."
        keywords="Book Appointment Pain Clinic Hyderabad, Contact Spine Specialist Hyderabad, Dr Vamshi Bharadwaj Contact"
        schema={faqSchema}
        type="ContactPage"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" }
        ]}
      />
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to take the first step towards a pain-free life? Contact us
              to schedule a consultation with Dr Vamshi Bharadwaj.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Contact Info Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden rounded-3xl bg-card shadow-sm border border-border/50">

            {/* Left: Contact Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Visit Us</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Healthcare Avenue, Jubilee Hills,
                        <br />
                        Hyderabad, Telangana 500033
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Call Us</h3>
                      <p className="text-muted-foreground mb-1">Mon-Sat from 9am to 7pm</p>
                      <a href="tel:+919392834992" className="text-primary font-medium hover:underline block">
                        +91 93928 34992
                      </a>
                      <a href="tel:+916303534992" className="text-primary font-medium hover:underline block">
                        +91 63035 34992
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-1">Our team is here to help.</p>
                      <a href="mailto:nirvanapainclinic@gmail.com" className="text-primary font-medium hover:underline">
                        nirvanapainclinic@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Embedded */}
              <div className="pt-6 border-t border-border/50">
                <p className="font-medium mb-4 text-foreground/80">Follow us on social media</p>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="h-[400px] lg:h-auto w-full bg-secondary relative min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3711518715855!2d78.41155671487756!3d17.43517098804678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90ce7e1b7e89%3A0x6a5c3d2e1d2f7c3b!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1629794729807!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section id="book-appointment" className="section-padding">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div className="card-medical p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Book Appointment
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Schedule a consultation with Dr Vamshi Bharadwaj
                  </p>
                </div>
              </div>
              <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="appt-name">Full Name</Label>
                  <Input
                    id="appt-name"
                    value={appointmentForm.name}
                    onChange={(e) =>
                      setAppointmentForm({
                        ...appointmentForm,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="appt-email">Email Address</Label>
                    <Input
                      id="appt-email"
                      type="email"
                      value={appointmentForm.email}
                      onChange={(e) =>
                        setAppointmentForm({
                          ...appointmentForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="appt-phone">Phone Number</Label>
                    <Input
                      id="appt-phone"
                      type="tel"
                      value={appointmentForm.phone}
                      onChange={(e) =>
                        setAppointmentForm({
                          ...appointmentForm,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+91 93928 34992"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="appt-condition">Condition</Label>
                    <Select
                      value={appointmentForm.condition}
                      onValueChange={(value) =>
                        setAppointmentForm({
                          ...appointmentForm,
                          condition: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="back-pain">Back Pain</SelectItem>
                        <SelectItem value="neck-pain">Neck Pain</SelectItem>
                        <SelectItem value="sciatica">Sciatica</SelectItem>
                        <SelectItem value="herniated-disc">Herniated Disc</SelectItem>
                        <SelectItem value="spinal-stenosis">Spinal Stenosis</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="appt-date">Preferred Date</Label>
                    <Input
                      id="appt-date"
                      type="date"
                      value={appointmentForm.date}
                      onChange={(e) =>
                        setAppointmentForm({
                          ...appointmentForm,
                          date: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="appt-message">Additional Notes (Optional)</Label>
                  <Textarea
                    id="appt-message"
                    value={appointmentForm.message}
                    onChange={(e) =>
                      setAppointmentForm({
                        ...appointmentForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Describe your symptoms or concerns"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Request Appointment
                </Button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="card-medical p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Send a Message
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    We'll respond as soon as possible
                  </p>
                </div>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input
                    id="contact-name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      placeholder="+91 93928 34992"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg mb-3 px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
