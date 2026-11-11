import type { YealinkProductData } from "./Index";

const SITE = "https://www.gs-it.ae";

type JsonLdData = Pick<YealinkProductData, "name" | "sku" | "seo" | "image" | "heroData" | "faqHeaderData">;

// Product, breadcrumb and FAQ structured data for a product page (Yealink by default; Logitech pages pass their brand).
// The breadcrumb follows the product's own crumbs, so each category keeps its trail.
export default function ProductJsonLd({ data, brand = "Yealink" }: { data: JsonLdData; brand?: string }) {
  const trail = data.heroData.crumbs.filter((c) => c.href);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: data.name,
      ...(data.sku && { sku: data.sku, mpn: data.sku }),
      brand: { "@type": "Brand", name: brand },
      description: data.seo.description,
      image: data.image.startsWith("http") ? data.image : `${SITE}${data.image}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        ...trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${SITE}${c.href}` })),
        { "@type": "ListItem", position: trail.length + 1, name: data.name },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqHeaderData.faqData.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />;
}
