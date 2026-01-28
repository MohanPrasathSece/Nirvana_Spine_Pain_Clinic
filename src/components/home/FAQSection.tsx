import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What conditions do you treat?",
        answer: "We specialize in a wide range of spine and pain conditions, including back pain, neck pain, sciatica, herniated discs, spinal stenosis, osteoarthritis, and chronic pain syndromes.",
    },
    {
        question: "Do I need a referral to book an appointment?",
        answer: "No, you don't necessarily need a referral to book an appointment with Dr Vamshi Bharadwaj. You can contact us directly to schedule a consultation.",
    },
    {
        question: "What should I bring to my first appointment?",
        answer: "Please bring any previous medical records, X-rays, MRI scans, or other diagnostic reports related to your condition. Also, bring a list of medications you are currently taking.",
    },
    {
        question: "What treatment options are available?",
        answer: "We offer both surgical and non-surgical treatment options. This includes physical therapy, interventional pain management, minimally invasive spine surgery, and complex spinal reconstructions tailored to your specific needs.",
    },
    {
        question: "Where is the clinic located?",
        answer: "Our clinic is located in Hyderabad. Please visit our contact page for the specific address and directions.",
    },
];

const FAQSection = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="section-padding bg-secondary/50">
            <script type="application/ld+json" className="dynamic-schema">
                {JSON.stringify(faqSchema)}
            </script>
            <div className="container-medical">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Find answers to common questions about our treatments and services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
