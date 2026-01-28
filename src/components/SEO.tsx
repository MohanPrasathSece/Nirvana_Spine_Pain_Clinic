import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    schema?: object | object[];
    breadcrumbs?: { name: string; item: string }[];
    canonical?: string;
}

const SEO = ({ title, description, keywords, schema, breadcrumbs, canonical }: SEOProps) => {
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

        // Update Canonical Link
        const canonicalUrl = canonical || `https://nirvanaspine.com${window.location.pathname}`;
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute("href", canonicalUrl);
        } else {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            linkCanonical.setAttribute("href", canonicalUrl);
            document.head.appendChild(linkCanonical);
        }

        // Schema handling
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
        existingScripts.forEach(script => script.remove());

        const schemas = Array.isArray(schema) ? [...schema] : (schema ? [schema] : []);

        // Add Breadcrumb Schema
        if (breadcrumbs) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": crumb.name,
                    "item": crumb.item.startsWith("http") ? crumb.item : `https://nirvanaspine.com${crumb.item}`
                }))
            };
            schemas.push(breadcrumbSchema);
        }

        if (schemas.length > 0) {
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
            // Cleanup logic if needed
        };
    }, [title, description, keywords, schema, breadcrumbs, canonical]);

    return null;
};

export default SEO;
