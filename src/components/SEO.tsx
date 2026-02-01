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
        updateOrCreateMeta("keywords", keywords || "Best Pain Clinic in Hyderabad, Spine Specialist Hyderabad, Dr Vamshi Bharadwaj, Sciatica Treatment Hyderabad, Back Pain Relief, Neck Pain Management, Chronic Pain Specialist, Slip Disc Treatment, Kokapet Pain Clinic, Gandipet Spine Specialist, Interventional Pain Management Hyderabad, Top Spine Surgeon Hyderabad, Non-Surgical Pain Relief Jubilee Hills");

        // Advanced Robots for Rare SEO
        updateOrCreateMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, translate-no, nositelinkssearchbox");

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
        updateOrCreateMeta("twitter:site", "@nirvanaspinewellness");

        // Ultra-Precise Geo Tags
        updateOrCreateMeta("geo.region", "IN-TG");
        updateOrCreateMeta("geo.placename", "Kokapet, Hyderabad");
        updateOrCreateMeta("geo.position", "17.3948;78.3315");
        updateOrCreateMeta("ICBM", "17.3948, 78.3315");
        updateOrCreateMeta("DC.title", title);
        updateOrCreateMeta("DC.publisher", "Nirvana Spine & Pain Clinic");

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

        // The "Organization" Schema with Elite Aggregate Rating
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": `${baseUrl}/#organization`,
            "name": "Nirvana Spine & Pain Clinic",
            "alternateName": ["Nirvana Clinic", "Nirvana Spine Pain Clinic Hyderabad"],
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "@id": `${baseUrl}/#logo`,
                "url": `${baseUrl}/logo-nobg.png`,
                "contentUrl": `${baseUrl}/logo-nobg.png`,
                "caption": "Nirvana Spine & Pain Clinic",
                "inLanguage": "en-IN",
                "width": 512,
                "height": 512
            },
            "image": { "@id": `${baseUrl}/#logo` },
            "telephone": "+919392834992",
            "email": "nirvanapainclinic@gmail.com",
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
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "528",
                "bestRating": "5",
                "worstRating": "1"
            },
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61586868845417",
                "https://www.instagram.com/nirvanapainclinic/",
                "https://www.google.com/maps?cid=7664188582736297019",
                "https://www.practo.com/hyderabad/clinic/nirvana-spine-pain-clinic-kokapet"
            ],
            "priceRange": "₹₹",
            "openingHours": "Mo-Sa 11:00-19:00",
            "medicalSpecialty": [
                "InterventionalPainManagement",
                "Physiotherapy",
                "Osteopathic",
                "SpineCare",
                "PainManagement"
            ],
            "hasMap": "https://www.google.com/maps?cid=7664188582736297019",
            "areaServed": [
                {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 17.3948,
                        "longitude": 78.3315
                    },
                    "geoRadius": "15000" // 15km Radius covering major tech hubs
                },
                { "@type": "City", "name": "Tellapur", "sameAs": "http://www.wikidata.org/entity/Q16314811" },
                { "@type": "City", "name": "Narsingi", "sameAs": "http://www.wikidata.org/entity/Q13000632" },
                { "@type": "City", "name": "Financial District", "sameAs": "http://www.wikidata.org/entity/Q5449591" },
                { "@type": "City", "name": "Kokapet", "sameAs": "http://www.wikidata.org/entity/Q6426615" },
                { "@type": "City", "name": "Gandipet", "sameAs": "http://www.wikidata.org/entity/Q5520743" },
                { "@type": "City", "name": "Hyderabad", "sameAs": "http://www.wikidata.org/entity/Q1355" },
                { "@type": "City", "name": "Gachibowli", "sameAs": "http://www.wikidata.org/entity/Q5516164" },
                { "@type": "City", "name": "Jubilee Hills", "sameAs": "http://www.wikidata.org/entity/Q626801" }
            ],
            "award": ["Best Pain Clinic in Hyderabad 2024", "Excellence in Interventional Pain Management", "Top Rated Spine Center Kokapet"],
            "founder": { "@id": `${baseUrl}/#doctor` }
        };

        const doctorSchema = {
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": `${baseUrl}/#doctor`,
            "name": "Dr. Vamshi Bharadwaj",
            "image": `${baseUrl}/image/vamshiimage.png`,
            "medicalSpecialty": "Pain Management Specialist",
            "description": "Leading Spine and Pain Management Specialist in Hyderabad specializing in advanced interventional techniques and non-surgical relief.",
            "memberOf": { "@id": `${baseUrl}/#organization` },
            "knowsAbout": [
                { "@type": "Thing", "name": "Sciatica", "sameAs": "http://www.wikidata.org/entity/Q193633" },
                { "@type": "Thing", "name": "Epidural Steroid Injection", "sameAs": "http://www.wikidata.org/entity/Q610996" },
                { "@type": "Thing", "name": "Herniated Disc", "sameAs": "http://www.wikidata.org/entity/Q551676" },
                { "@type": "Thing", "name": "Radiofrequency Ablation", "sameAs": "http://www.wikidata.org/entity/Q2126442" }
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "4th floor, Radha Spaces, Kokapet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500075",
                "addressCountry": "IN"
            },
            "sameAs": [
                "https://www.practo.com/hyderabad/doctor/vamshi-bharadwaj-pain-management",
                "http://www.wikidata.org/entity/Q10309"
            ]
        };

        const webpageSchema = {
            "@context": "https://schema.org",
            "@type": type,
            "@id": `${currentUrl}/#webpage`,
            "url": currentUrl,
            "name": title,
            "description": description,
            "isPartOf": { "@id": `${baseUrl}/#website` },
            "about": { "@id": `${baseUrl}/#organization` },
            "mainEntityOfPage": { "@id": `${currentUrl}/#webpage` },
            "primaryImageOfPage": { "@id": `${currentUrl}/#primaryimage` },
            "breadcrumb": { "@id": `${currentUrl}/#breadcrumb` },
            "inLanguage": "en-IN",
            "reviewedBy": { "@id": `${baseUrl}/#doctor` },
            "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            },
            "mentions": [
                { "@type": "MedicalCondition", "name": "Chronic Pain", "sameAs": "http://www.wikidata.org/entity/Q1093108" },
                { "@type": "MedicalSpecialty", "name": "Interventional Radiology", "sameAs": "http://www.wikidata.org/entity/Q656006" }
            ],
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
            "inLanguage": "en-IN",
            "representativeOfPage": "true"
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
                    "item": crumb.item.startsWith("http") ? crumb.item : `${baseUrl}${crumb.item === "/" ? "" : crumb.item}`
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
