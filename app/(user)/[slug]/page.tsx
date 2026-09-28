import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveSlug } from "./resolveSlug";
import SectionRenderer from "./SectionRenderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await resolveSlug(slug);
  if (!service) return {};

  const seo = service.seo ?? {};

  return {
    title: seo.metaTitle || service.name,
    description: seo.metaDescription,
    openGraph: {
      title: seo.ogTitle || seo.metaTitle || service.name,
      description: seo.ogDescription || seo.metaDescription,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
    twitter: {
      title: seo.twitterTitle || seo.metaTitle || service.name,
      description: seo.twitterDescription || seo.metaDescription,
      images: seo.twitterImage ? [seo.twitterImage] : undefined,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = await resolveSlug(slug);

  if (!service) notFound();

  return <SectionRenderer sections={service.sections ?? []} />;
};

export default Page;
