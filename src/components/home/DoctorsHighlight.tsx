import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, GraduationCap, Clock } from "lucide-react";
const doctorPortrait = "/image/vamshiimage.png";

const DoctorsHighlight = () => {
  return (
    <section className="section-padding bg-white border-y border-border/40">
      <div className="container-medical">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-2 w-full flex justify-center">
            <div className="relative max-w-sm">
              <img
                src={doctorPortrait}
                alt="Dr Vamshi Bharadwaj - Spine Specialist"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg md:-right-8">
                <p className="text-2xl font-heading font-bold">3</p>
                <p className="text-xs opacity-90 uppercase tracking-tighter font-semibold">Years Exp</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1" itemScope itemType="https://schema.org/Physician">
            <p className="text-primary font-medium mb-2">Meet Your Specialist</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" itemProp="name">
              Dr Vamshi Bharadwaj
            </h2>
            <meta itemProp="medicalSpecialty" content="Pain Management Specialist" />
            <meta itemProp="address" content="Jubilee Hills, Hyderabad" />
            <p className="text-xl text-muted-foreground mb-2">
              Spine & Pain Management Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dr Vamshi Bharadwaj is a renowned spine specialist in Hyderabad with 3
              years of experience in treating complex spine conditions and
              chronic pain. He combines advanced interventional techniques with
              a patient-centered approach to deliver lasting relief.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Qualifications</p>
                  <p className="text-sm text-muted-foreground">
                    MBBS, MD (Anesthesiology), Fellowship in Pain Management
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Specializations</p>
                  <p className="text-sm text-muted-foreground">
                    Interventional Pain Management, Spine Disorders, Neuromodulation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Availability</p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="gap-2">
              <Link to="/contact#book-appointment">
                Book Appointment with Dr Vamshi Bharadwaj
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsHighlight;
