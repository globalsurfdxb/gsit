import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SpecItem {
  label: string;
  value: string;
}

export interface FirewallProduct {
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
  specs: SpecItem[];
  enquireHref?: string;
}

export interface FirewallCatalogueData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  products: FirewallProduct[];
}

interface FirewallCatalogueProps {
  data: FirewallCatalogueData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  enquireHref?: string; // fallback for products without their own link
  id?: string;
}

export default function FirewallCatalogue({
  data,
  variant,
  subtitleClass,
  enquireHref = "/contact",
  id = "catalogue",
}: FirewallCatalogueProps) {
  return (
    <section id={id} className="bg-white py-82 rounded-2xl scroll-mt-4">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.products.map((product) => (
            <article
              key={product.title}
              className="flex flex-col min-w-0 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white transition-colors duration-300 hover:border-primary/40"
            >
              {/* Image */}
              <Link
                href={product.href}
                tabIndex={-1}
                aria-hidden="true"
                className="relative block aspect-[864/527] bg-[#e3e6ea] border-b border-[#E5E5E5]"
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </Link>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-2.5 px-5 pt-[18px] pb-[22px]">
                <span className="w-fit rounded bg-bgF5F9FC px-2 py-0.5 text-[12.5px] text-primary">
                  {product.tag}
                </span>

                <h3 className="text-[19px] leading-[1.3] font-medium tracking-[-1%] text-[#1a1a1a]">
                  <Link
                    href={product.href}
                    className="transition-colors hover:text-primary"
                  >
                    {product.title}
                  </Link>
                </h3>

                <p className="text-[14.5px] leading-[1.55] text-paragraph">
                  {product.description}
                </p>

                {/* Specs */}
                <dl className="mt-0.5 grid gap-1.5 border-t border-[#E5E5E5] pt-3 text-14">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-[96px_1fr] 3xl:grid-cols-[120px_1fr] gap-2.5"
                    >
                      <dt className="text-paragraph">{spec.label}</dt>
                      <dd className="m-0 text-[#1a1a1a]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-2.5">
                  <Link
                    href={product.href}
                    className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-primary hover:underline"
                  >
                    View product
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href={product.enquireHref ?? enquireHref}
                    className="rounded-full border border-primary px-3.5 py-1.5 text-[14px] font-medium text-primary transition-colors duration-300 hover:bg-bgF5F9FC"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}