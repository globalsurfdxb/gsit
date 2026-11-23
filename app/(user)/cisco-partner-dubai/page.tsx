import type { Metadata } from "next";
import Index from "@/app/components/CiscoPartnerDubai/Index";
import { seo, faqHeaderData } from "@/app/components/CiscoPartnerDubai/data";

const SITE = "https://www.gs-it.ae";
const URL = `${SITE}/cisco-partner-dubai`;

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: URL },
    openGraph: {
        type: "website",
        siteName: "GS IT",
        url: URL,
        title: seo.ogTitle,
        description: seo.ogDescription,
        images: [`${SITE}${seo.image}`],
    },
};

// Breadcrumb and FAQ structured data
const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Cisco Partner Dubai", item: URL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqHeaderData.faqData.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
    },
];

const page = () => (
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <Index />
    </>
);

export default page;
