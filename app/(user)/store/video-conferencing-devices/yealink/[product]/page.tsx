import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Index from "@/app/components/YealinkProduct/Index";
import ProductJsonLd from "@/app/components/YealinkProduct/ProductJsonLd";
import { yealinkProducts } from "@/app/components/YealinkProduct/products";

interface PageProps {
    params: Promise<{ product: string }>;
}

// Only the products in the registry exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(yealinkProducts).map((product) => ({ product }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { product } = await params;
    const data = yealinkProducts[product];
    if (!data) return {};
    return { title: data.seo.title, description: data.seo.description };
}

const page = async ({ params }: PageProps) => {
    const { product } = await params;
    const data = yealinkProducts[product];
    if (!data) notFound();

    return (
        <>
            <ProductJsonLd data={data} />
            <Index data={data} />
        </>
    );
};

export default page;
