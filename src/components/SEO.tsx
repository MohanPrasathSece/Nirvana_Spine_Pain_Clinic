import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    schema?: object | object[];
    breadcrumbs?: { name: string; item: string }[];
    canonical?: string;
    type?: "WebPage" | "MedicalWebPage" | "AboutPage" | "ContactPage";
    primaryImage?: string;
}

const SEO = ({
    title,
    description,
    keywords,
    schema,
    breadcrumbs,
    canonical,
    type = "MedicalWebPage",
    primaryImage = "https://nirvanapainclinic.com/logo-nobg.png"
}: SEOProps) => {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const newMetaDescription = document.createElement("meta");
            newMetaDescription.setAttribute("name", "description");
            newMetaDescription.setAttribute("content", description);
            document.head.appendChild(newMetaDescription);
        }

        // Update Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", keywords || "");
        } else if (keywords) {
            const newMetaKeywords = document.createElement("meta");
            newMetaKeywords.setAttribute("name", "keywords");
            newMetaKeywords.setAttribute("content", keywords);
            document.head.appendChild(newMetaKeywords);
        }

        // Update Canonical Link
        const canonicalUrl = canonical || `https://nirvanapainclinic.com${window.location.pathname}`;
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute("href", canonicalUrl);
        } else {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            linkCanonical.setAttribute("href", canonicalUrl);
            document.head.appendChild(linkCanonical);
        }

        // Schema handling logic
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
        existingScripts.forEach(script => script.remove());
        const schemas = Array.isArray(schema) ? [...schema] : (schema ? [schema] : []);

        // Image Search Dominance (Rare Signal)
        const imageSchema = {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "@id": `${canonicalUrl}#primaryimage`,
            "url": primaryImage,
            "contentUrl": primaryImage,
            "caption": title,
            "representativeOfPage": "true",
            "locationCreated": {
                "@type": "Place",
                "name": "Jubilee Hills, Hyderabad",
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 17.435171,
                    "longitude": 78.411557
                }
            }
        };

        const pageSchema = {
            "@context": "https://schema.org",
            "@type": type,
            "name": title,
            "description": description,
            "url": canonicalUrl,
            "primaryImageOfPage": { "@id": `${canonicalUrl}#primaryimage` },
            "lastReviewed": new Date().toISOString().split('T')[0],
            "reviewedBy": {
                "@id": "https://nirvanapainclinic.com/#doctor"
            },
            "medicalSpecialty": "Interventional Pain Management"
        };
        schemas.push(imageSchema, pageSchema);

        // Add Breadcrumb Schema
        if (breadcrumbs) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": crumb.name,
                    "item": crumb.item.startsWith("http") ? crumb.item : `https://nirvanapainclinic.com${crumb.item}`
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
