import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Index from "@/app/components/LogitechProduct/Index";
import ProductJsonLd from "@/app/components/YealinkProduct/ProductJsonLd";
import { logitechProducts } from "@/app/components/LogitechProduct/products";

interface PageProps {
    params: Promise<{ product: string }>;
}

// Only the products in the registry exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(logitechProducts).map((product) => ({ product }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { product } = await params;
    const data = logitechProducts[product];
    if (!data) return {};
    return { title: data.seo.title, description: data.seo.description };
}

const page = async ({ params }: PageProps) => {
    const { product } = await params;
    const data = logitechProducts[product];
    if (!data) notFound();

    return (
        <>
            <ProductJsonLd data={data} brand="Logitech" />
            <Index data={data} />
        </>
    );
};

export default page;
