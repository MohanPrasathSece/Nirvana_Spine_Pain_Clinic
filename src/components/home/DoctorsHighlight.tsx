import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, GraduationCap, Clock } from "lucide-react";
const doctorPortrait = "/image/procedure-3.jpg";

const DoctorsHighlight = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-medical">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-2 w-full">
            <img
              src={doctorPortrait}
              alt="Dr. Vamshi - Spine Specialist"
              className="rounded-2xl shadow-lg w-full max-w-lg mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-heading font-bold">15+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2">Meet Your Specialist</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Dr. Vamshi
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Spine & Pain Management Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dr. Vamshi is a renowned spine specialist in Hyderabad with over
              15 years of experience in treating complex spine conditions and
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
                Book Appointment with Dr. Vamshi
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
