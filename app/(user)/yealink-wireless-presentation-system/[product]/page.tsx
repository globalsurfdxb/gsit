import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Index from "@/app/components/YealinkProduct/Index";
import ProductJsonLd from "@/app/components/YealinkProduct/ProductJsonLd";
import { presentationProducts } from "@/app/components/YealinkProduct/products/wireless-presentation";

interface PageProps {
    params: Promise<{ product: string }>;
}

// Only the wireless presentation devices in the registry exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(presentationProducts).map((product) => ({ product }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { product } = await params;
    const data = presentationProducts[product];
    if (!data) return {};
    return { title: data.seo.title, description: data.seo.description };
}

const page = async ({ params }: PageProps) => {
    const { product } = await params;
    const data = presentationProducts[product];
    if (!data) notFound();

    return (
        <>
            <ProductJsonLd data={data} />
            <Index data={data} />
        </>
    );
};

export default page;
