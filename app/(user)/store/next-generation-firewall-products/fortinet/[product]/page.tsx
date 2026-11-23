import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Index from "@/app/components/CiscoProduct/Index";
import ProductJsonLd from "@/app/components/YealinkProduct/ProductJsonLd";
import { fortigateProducts } from "@/app/components/FortinetProduct/products";

const SITE = "https://www.gs-it.ae";
const BASE = `${SITE}/store/next-generation-firewall-products/fortinet`;

interface PageProps {
    params: Promise<{ product: string }>;
}

// Only the products in the registry exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(fortigateProducts).map((product) => ({ product }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { product } = await params;
    const data = fortigateProducts[product];
    if (!data) return {};
    const url = `${BASE}/${data.slug}`;
    return {
        title: data.seo.title,
        description: data.seo.description,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            siteName: "GS IT",
            url,
            title: data.seo.ogTitle ?? data.seo.title,
            description: data.seo.ogDescription ?? data.seo.description,
            images: data.image ? [`${SITE}${data.image}`] : undefined,
        },
    };
}

const page = async ({ params }: PageProps) => {
    const { product } = await params;
    const data = fortigateProducts[product];
    if (!data) notFound();

    return (
        <>
            <ProductJsonLd data={data} brand="Fortinet" />
            <Index data={data} />
        </>
    );
};

export default page;
