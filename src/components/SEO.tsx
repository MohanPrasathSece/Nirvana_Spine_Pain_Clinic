import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    schema?: object | object[];
}

const SEO = ({ title, description, keywords, schema }: SEOProps) => {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        // Update Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", keywords || "");
        }

        // Insert JSON-LD Schema
        if (schema) {
            const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
            existingScripts.forEach(script => script.remove());

            const schemas = Array.isArray(schema) ? schema : [schema];

            schemas.forEach(s => {
                const script = document.createElement("script");
                script.type = "application/ld+json";
                script.className = "dynamic-schema";
                script.text = JSON.stringify(s);
                document.head.appendChild(script);
            });
        }

        // Cleanup on unmount
        return () => {
            // document.title = "Nirvana Spine & Pain Clinic | Hyderabad"; // Default title
        };
    }, [title, description, keywords, schema]);

    return null;
};

export default SEO;
