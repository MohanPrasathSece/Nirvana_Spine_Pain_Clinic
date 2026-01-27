import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GallerySection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    const items = [
        { id: 1, src: "/image/procedure-1.jpg", title: "Advanced Treatment" },
        { id: 2, src: "/image/procedure-2.jpg", title: "Precision Care" },
        { id: 3, src: "/image/procedure-3.jpg", title: "Modern Facility" },
        { id: 4, src: "/image/procedure-4.jpg", title: "Specialized Equipment" },
        { id: 5, src: "/image/procedure-5.jpg", title: "Expert Diagnosis" },
        { id: 6, src: "/image/procedure-6.jpg", title: "Pain Management" },
        { id: 7, src: "/image/procedure-7.jpg", title: "Patient Recovery" },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-12 left-12 z-10">
                    <p className="text-primary font-medium mb-2">Our Clinical Excellence</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                        Treatment Gallery
                    </h2>
                </div>
                <motion.div style={{ x }} className="flex gap-8 px-12 pt-24">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[60vh] w-[80vw] md:w-[450px] overflow-hidden rounded-2xl bg-muted"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;
