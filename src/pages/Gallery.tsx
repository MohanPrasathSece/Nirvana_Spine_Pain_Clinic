
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
    {
        src: "/image/procedure-1.jpg",
        alt: "Spine Procedure 1",
        title: "Advanced Diagnostics",
        description: "State-of-the-art diagnostic imaging for accurate spine assessment."
    },
    {
        src: "/image/procedure-2.jpg",
        alt: "Spine Procedure 2",
        title: "Minimally Invasive Surgery",
        description: "Scope-based procedures ensuring faster recovery and minimal scarring."
    },
    {
        src: "/image/procedure-3.jpg",
        alt: "Spine Procedure 3",
        title: "Pain Management Injection",
        description: "Targeted injections to relieve chronic pain and inflammation."
    },
    {
        src: "/image/procedure-4.jpg",
        alt: "Spine Procedure 4",
        title: "Physical Rehabilitation",
        description: "Guided exercises to restore strength and flexibility."
    },
    {
        src: "/image/procedure-5.jpg",
        alt: "Spine Procedure 5",
        title: "Consultation & Care",
        description: "Personalized consultation with our spine specialists."
    },
    {
        src: "/image/procedure-6.jpg",
        alt: "Spine Procedure 6",
        title: "Surgical Suite",
        description: "Modern surgical facilities equipped with latest technology."
    },
    {
        src: "/image/procedure-7.jpg",
        alt: "Spine Procedure 7",
        title: "Recovery & Monitoring",
        description: "Post-procedure care ensuring patient comfort and safety."
    }
];

const Gallery = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-secondary section-padding">
                <div className="container-medical">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-primary font-medium mb-2">Our Facilities & Procedures</p>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                            Gallery
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Explore our state-of-the-art facilities and get a glimpse of the advanced procedures we perform to ensure your spinal health.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding">
                <div className="container-medical">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-sm group relative border border-border/20">
                                <div className="aspect-square relative">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary">
                <div className="container-medical text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Ready to Start Your Journey to Recovery?
                    </h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        Contact us today to schedule a consultation and learn more about our treatments.
                    </p>
                    <Button size="lg" variant="secondary" asChild className="gap-2">
                        <Link to="/contact">
                            Book an Appointment
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;
