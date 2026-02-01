import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    schema?: object | object[];
    breadcrumbs?: { name: string; item: string }[];
    canonical?: string;
    type?: "WebPage" | "MedicalWebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
    primaryImage?: string;
    noindex?: boolean;
}

const SEO = ({
    title,
    description,
    keywords,
    schema,
    breadcrumbs,
    canonical,
    type = "MedicalWebPage",
    primaryImage = "https://nirvanapainclinic.com/logo-nobg.png",
    noindex = false
}: SEOProps) => {
    useEffect(() => {
        const baseUrl = "https://nirvanapainclinic.com";
        const currentPath = window.location.pathname;
        const currentUrl = canonical || `${baseUrl}${currentPath}`;

        // Update Title
        document.title = title;

        // Update Meta Tags
        updateOrCreateMeta("description", description);
        updateOrCreateMeta("keywords", keywords || "Best Pain Clinic in Hyderabad, Spine Specialist Hyderabad, Dr Vamshi Bharadwaj, Sciatica Treatment Hyderabad, Back Pain Relief, Neck Pain Management, Chronic Pain Specialist, Slip Disc Treatment");

        // Robots
        updateOrCreateMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

        // Open Graph tags
        updateOrCreateMeta("og:title", title, "property");
        updateOrCreateMeta("og:description", description, "property");
        updateOrCreateMeta("og:image", primaryImage, "property");
        updateOrCreateMeta("og:url", currentUrl, "property");
        updateOrCreateMeta("og:type", "website", "property");
        updateOrCreateMeta("og:site_name", "Nirvana Spine & Pain Clinic", "property");
        updateOrCreateMeta("og:locale", "en_IN", "property");

        // Twitter tags
        updateOrCreateMeta("twitter:card", "summary_large_image");
        updateOrCreateMeta("twitter:title", title);
        updateOrCreateMeta("twitter:description", description);
        updateOrCreateMeta("twitter:image", primaryImage);
        updateOrCreateMeta("twitter:site", "@nirvanaspinewellness"); // Fallback handle

        // Geo Tags for Kokapet/Gandipet
        updateOrCreateMeta("geo.region", "IN-TG");
        updateOrCreateMeta("geo.placename", "Hyderabad");
        updateOrCreateMeta("geo.position", "17.3948;78.3315");
        updateOrCreateMeta("ICBM", "17.3948, 78.3315");

        // Update Canonical Link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute("href", currentUrl);
        } else {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            linkCanonical.setAttribute("href", currentUrl);
            document.head.appendChild(linkCanonical);
        }

        // Schema handling logic
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
        existingScripts.forEach(script => script.remove());

        const schemas = Array.isArray(schema) ? [...schema] : (schema ? [schema] : []);

        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": `${baseUrl}/#organization`,
            "name": "Nirvana Spine & Pain Clinic",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "@id": `${baseUrl}/#logo`,
                "url": `${baseUrl}/logo-nobg.png`,
                "contentUrl": `${baseUrl}/logo-nobg.png`,
                "caption": "Nirvana Spine & Pain Clinic",
                "inLanguage": "en-US",
                "width": 512,
                "height": 512
            },
            "image": { "@id": `${baseUrl}/#logo` },
            "telephone": "+919392834992",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "4th floor, Radha Spaces, Gooncha Hills Main St, Kokapet, Gandipet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500075",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.3948,
                "longitude": 78.3315
            },
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61586868845417",
                "https://www.instagram.com/nirvanapainclinic/"
            ],
            "priceRange": "₹₹",
            "openingHours": "Mo-Sa 11:00-19:00",
            "medicalSpecialty": ["Interventional Pain Management", "Physiotherapy", "Osteopathic"],
            "hasMap": "https://www.google.com/maps?cid=YOUR_CID_HERE", // Reminder to add CID
            "areaServed": ["Kokapet", "Gandipet", "Financial District", "Gachibowli", "Madhapur", "Hyderabad"]
        };

        const doctorSchema = {
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": `${baseUrl}/#doctor`,
            "name": "Dr. Vamshi Bharadwaj",
            "image": `${baseUrl}/image/vamshiimage.png`,
            "medicalSpecialty": "Interventional Pain Management",
            "description": "Leading Spine and Pain Management Specialist in Hyderabad serving Kokapet, Gandipet and nearby areas.",
            "memberOf": { "@id": `${baseUrl}/#organization` },
            "knowsAbout": ["Sciatica", "Slip Disc", "Back Pain", "Neck Pain", "Epidural Injections", "RF Ablation"]
        };

        const webpageSchema = {
            "@context": "https://schema.org",
            "@type": type,
            "@id": `${currentUrl}/#webpage`,
            "url": currentUrl,
            "name": title,
            "description": description,
            "isPartOf": { "@id": `${baseUrl}/#website` },
            "primaryImageOfPage": { "@id": `${currentUrl}/#primaryimage` },
            "breadcrumb": { "@id": `${currentUrl}/#breadcrumb` },
            "inLanguage": "en-IN",
            "potentialAction": [{
                "@type": "ReadAction",
                "target": [currentUrl]
            }]
        };

        const imageSchema = {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "@id": `${currentUrl}/#primaryimage`,
            "url": primaryImage,
            "contentUrl": primaryImage,
            "caption": title,
            "inLanguage": "en-IN"
        };

        schemas.push(organizationSchema, doctorSchema, webpageSchema, imageSchema);

        if (breadcrumbs) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "@id": `${currentUrl}/#breadcrumb`,
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": crumb.name,
                    "item": crumb.item.startsWith("http") ? crumb.item : `${baseUrl}${crumb.item}`
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
    }, [title, description, keywords, schema, breadcrumbs, canonical, type, primaryImage, noindex]);

    const updateOrCreateMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
        if (!content) return;
        let element = document.querySelector(`meta[${attr}="${name}"]`);
        if (element) {
            element.setAttribute("content", content);
        } else {
            element = document.createElement("meta");
            element.setAttribute(attr, name);
            element.setAttribute("content", content);
            document.head.appendChild(element);
        }
    };

    return null;
};

export default SEO;
