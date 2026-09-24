import BannerMain, { FeatureItem as HeroData } from "@/app/components/common/Banner/BannerMain";
import BannerDesc from "@/app/components/common/BannerDesc";
import Testimonials from "@/app/components/common/Testimonials";
import TrustedBy from "@/app/components/common/TrustedBy";
import GridwithImageCard from "@/app/components/common/Boxgrid/GridwithImageCard";
import IconCardGrid from "@/app/components/common/IconCardGrid";
import ImageCard from "@/app/components/common/ImageCard";
import TechMediumSection from "@/app/components/common/TableComparison/CompareTable";
import ComparisonOne from "@/app/components/common/ComparisonOne";
import NumberBox from "@/app/components/common/Numbox/NumberBox";
import WhyChooseUsSection from "@/app/components/common/WhyChooseUsSection";
import PartnersSlider from "@/app/components/common/PartnersSlider";
import FooterCta from "@/app/components/common/Banner/FooterCta";
import PublicFaqSection from "@/app/components/common/Faq/FaqSection";
import IndustriesWeServe from "@/app/components/common/IndustriesWeServe";
import GridGraySection from "@/app/components/common/Boxgrid/GridGraySection";
import TabCards from "@/app/components/common/TabCard/TabCards";
import OverviewCardsGrid from "@/app/components/common/Boxgrid/OverviewCard";
import AvProfessionalServices from "@/app/components/AVSolutions/Sections/AvProfessionalServices";
import Comparison from "@/app/components/common/Comparison";
import ServicesCard from "@/app/components/common/ServicesCard";
import ThrowDistanceGuide from "@/app/components/common/Throwdistanceguide";
import { connectDB } from "@/lib/db/connect";
import GlobalSection from "@/app/models/GlobalSection";
import Testimonial from "@/app/models/Testimonial";
import { replaceVariables } from "@/lib/variables/definitions";
import { getSiteVariables } from "@/lib/variables/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySection = any;

// HeadingTag's fallback `highlightLast` prop counts trailing words by
// splitting on a literal " " — a line break the admin types in the Title
// textarea (with no surrounding space) glues the words on either side into
// one token, throwing that count off by one per line break even though the
// line still renders as two visible words (via `white-space: pre-line`).
// The reliable way to control both the line break AND the highlighted
// portion is to type the break where it belongs and wrap the part that
// should be highlighted in {{double curly braces}}, e.g.
// "Cyber Security Services in\n{{Dubai for Growing Modern Businesses}}" —
// HeadingTag detects the markers and skips word-counting entirely in that
// case, so the newline just passes through untouched.

interface SectionRendererProps {
  sections: AnySection[];
}

// One adapter per admin section `type`, translating the shape the CMS saves
// into whatever props the matching public component expects. Add a case here
// whenever a new section type gets wired up to a real frontend component;
// unmapped types render nothing (with a dev-only console warning) instead of
// crashing the page.
// Trusted By logos are shared, site-wide content (edited once from the
// admin Services list page's "Trusted By" tab) — fetched here by key
// instead of reading it off the individual service's saved section data.
async function fetchGlobalSection(key: "trusted-by") {
  await connectDB();
  const doc = await GlobalSection.findOne({ key }).lean<AnySection>();
  return doc ?? { eyebrow: "", title: "", logos: [] };
}

// A service's Testimonials section stores only ids into the shared
// Testimonial library (see /admin/testimonials) — fetch the selected
// documents here, in the order the admin picked them.
async function fetchTestimonials(ids: string[]) {
  if (!ids || ids.length === 0) return [];
  await connectDB();
  const docs = await Testimonial.find({ _id: { $in: ids } }).lean<AnySection[]>();
  const byId = new Map(docs.map((doc) => [String(doc._id), doc]));
  const variables = await getSiteVariables();
  return ids
    .map((id) => byId.get(id))
    .filter(Boolean)
    .map((doc) =>
      // Pick plain fields only — the raw lean doc carries ObjectId/Date
      // values that the deep variable replacement must not walk into.
      replaceVariables(
        {
          avatar: doc.avatar,
          name: doc.name,
          designation: doc.designation,
          companyLogo: doc.companyLogo,
          quote: doc.quote,
        },
        variables,
      ),
    ) as AnySection[];
}

export default async function SectionRenderer({ sections }: SectionRendererProps) {
  const rendered = await Promise.all(
    sections.map(async (section, index) => {
      switch (section.type) {
        case "Hero":
          return <HeroSection key={index} section={section} />;
        case "Overview":
          return <OverviewSection key={index} section={section} />;
        case "Tabbed Grid":
          return <TabbedGridSection key={index} section={section} />;
        case "Trusted By":
          return <TrustedBySection key={index} global={await fetchGlobalSection("trusted-by")} />;
        case "Mixed Feature Grid":
          return <MixedFeatureGridSection key={index} section={section} />;
        case "Solutions Grid":
          return <SolutionsGridSection key={index} section={section} />;
        case "Comparison Table":
          return <ComparisonTableSection key={index} section={section} />;
        case "Process Steps":
          return <ProcessStepsSection key={index} section={section} />;
        case "Feature Grid":
          return <FeatureGridSection key={index} section={section} />;
        case "Image Feature Grid":
          return <ImageFeatureGridSection key={index} section={section} />;
        case "Partners":
          return <PartnersSection key={index} section={section} />;
        case "Testimonials":
          return (
            <TestimonialsSection
              key={index}
              section={section}
              testimonials={await fetchTestimonials(section.testimonialIds ?? [])}
            />
          );
        case "CTA":
          return <CtaSection key={index} section={section} />;
        case "FAQ":
          return <FaqSection key={index} section={section} />;
        case "Feature Comparison":
          return <FeatureComparisonSection key={index} section={section} />;
        case "Industries We Serve":
          return <IndustriesWeServeSection key={index} section={section} />;
        case "Gray Grid":
          return <GrayGridSection key={index} section={section} />;
        case "Overview Cards":
          return <OverviewCardsSection key={index} section={section} />;
        case "Professional Services":
          return <ProfessionalServicesSection key={index} section={section} />;
        case "Competitor Comparison":
          return <CompetitorComparisonSection key={index} section={section} />;
        case "Image Row Grid":
          return <ImageRowGridSection key={index} section={section} />;
        case "Specification Table":
          return <SpecificationTableSection key={index} section={section} />;
        default:
          if (process.env.NODE_ENV !== "production") {
            console.warn(`SectionRenderer: no renderer wired up for section type "${section.type}"`);
          }
          return null;
      }
    }),
  );

  return <>{rendered}</>;
}

function HeroSection({ section }: { section: AnySection }) {
  const buttons = [
    section.primaryButtonText && {
      text: section.primaryButtonText,
      href: section.primaryButtonHref || "#",
      icon: "arrow",
      bgButton: "bg-primary",
      dark: true,
    },
    section.secondaryButtonText && {
      text: section.secondaryButtonText,
      href: section.secondaryButtonHref || "#",
      icon: "arrow",
      bgButton: "bg-white",
      dark: false,
    },
  ].filter(Boolean) as HeroData["buttons"];

  const bannerData: HeroData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    // Only used when the title has no {{...}} highlight markers (see
    // HeadingTag) — admin-configurable per service, falls back to 6.
    highlightLast: Number(section.highlightLast) || 6,
    description: section.description ?? "",
    bannercta: section.bannercta ?? "",
    backgroundImage: section.backgroundImage ?? "",
    mobbanner: section.mobbanner || section.backgroundImage || "",
    buttons,
    points: (section.stats ?? []).map((stat: AnySection) => ({
      value: stat.value,
      desc: stat.label,
    })),
  };

  return (
    <BannerMain
      bannerData={bannerData}
      // Each service can override these three layout values from the admin
      // Hero section's "Layout overrides" fields — falls back to the
      // iptv-for-cruiseship defaults when left blank.
      padding={section.padding || "pt-[277px] pb-4 md:py-[82px] lg:py-[80px] 2xl:py-[128px] 3xl:py-[136.5px]"}
      // BannerMain's description is a single <p> with no built-in width cap —
      // every static page constrains it via this prop so it wraps onto
      // multiple lines instead of running full-width on one.
      descstyle={section.descstyle || "max-w-[60ch]"}
      // Same deal for each stat's value/desc block — without this, BannerMain
      // interpolates `undefined` straight into the className string.
      classpointdes={section.classpointdes || "lg:w-[185px] 3xl:w-[210.75px]"}
    />
  );
}

function OverviewSection({ section }: { section: AnySection }) {
  return (
    <BannerDesc
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        backgroundImage: section.image ?? "",
        mobbanner: section.image ?? "",
        // BannerDesc renders one <p> per paragraph — admin stores the
        // description as one multi-line textarea, so split on blank lines.
        description: (section.description ?? "")
          .split(/\n+/)
          .map((line: string) => line.trim())
          .filter(Boolean),
      }}
      // Each service can override these from the admin Overview section's
      // "Layout overrides" fields — falls back to BannerDesc's own defaults.
      {...(section.spacey ? { spacey: section.spacey } : {})}
      {...(section.maxw ? { maxw: section.maxw } : {})}
    />
  );
}

function TabbedGridSection({ section }: { section: AnySection }) {
  const slugify = (value: string) =>
    (value ?? "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <TabCards
      // Admin-configurable card style/width/columns — falls back to the
      // AVSolutions default when left blank.
      variant={section.variant || "subtitleBorder"}
      gridcount={section.gridcount || "4"}
      subtitleClass={section.subtitleClass || "max-w-[160ch]"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        cardData: (section.tabs ?? []).map((tab: AnySection, i: number) => ({
          id: slugify(tab.tabName) || String(i),
          label: tab.tabName ?? "",
          cards: (tab.cards ?? []).map((card: AnySection, j: number) => ({
            id: String(j),
            titleLine1: card.titleLine1 ?? "",
            titleLine2: card.titleLine2 ?? "",
            description: card.description ?? "",
            image: card.image ?? "",
            url: card.href || "#",
          })),
        })),
      }}
    />
  );
}

function TrustedBySection({ global }: { global: AnySection }) {
  return (
    <TrustedBy
      TrustedbyData={(global.logos ?? []).map((logo: AnySection) => ({
        src: logo.image ?? "",
        alt: logo.alt ?? "",
      }))}
    />
  );
}

function MixedFeatureGridSection({ section }: { section: AnySection }) {
  return (
    <GridwithImageCard
      // Admin-configurable card style — falls back to the
      // iptv-for-cruiseship default when left blank.
      variant={section.variant || "defaultBorder"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        items: (section.items ?? []).map((item: AnySection) =>
          item.variant === "image"
            ? { type: "image", image: item.image ?? "", title: item.title ?? "" }
            : {
              type: "card",
              icon: item.icon || item.iconName || "",
              title: item.title ?? "",
              description: item.description ?? "",
            },
        ),
      }}
      subtitleClass={section.subtitleClass || "lg:max-w-[32ch] xl:max-w-[50ch]"}
    />
  );
}

function SolutionsGridSection({ section }: { section: AnySection }) {
  return (
    <IconCardGrid
      // Admin-configurable card style — falls back to the
      // iptv-for-cruiseship default when left blank.
      variant={section.variant || "subtitleBorder"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 5,
        subhead: section.description ?? "",
        servicesData: (section.cards ?? []).map((card: AnySection) => ({
          icon: card.icon || card.iconName || "",
          title: card.title ?? "",
          description: card.description ?? "",
          featured: !!card.featured,
          href: card.href || "#",
        })),
        ...(section.footerdata ? { footerdata: section.footerdata } : {}),
      }}
      gridcount={Number(section.gridcount) || 3}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
    />
  );
}

function ComparisonTableSection({ section }: { section: AnySection }) {
  const columns = section.columns ?? [];
  const rows = section.rows ?? [];
  const roomreadingItems = (section.roomreadingItems ?? [])
    .map((item: AnySection) => item.text ?? "")
    .filter(Boolean);

  return (
    <TechMediumSection
      // Admin-configurable card style/width — falls back to the
      // iptv-for-cruiseship default when left blank.
      variant={section.variant || "subtitleBorder"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
        subhead: section.description ?? "",
        columns: [
          ...columns.map((column: AnySection, i: number) => ({
            key: `col${i}`,
            label: column.label ?? "",
          })),
        ],
        rows: rows.map((row: AnySection) => {
          const record: Record<string, string> = { aspect: row.aspect ?? "" };
          // Each cell is saved as { title, description } (two Textareas in
          // the admin), but TechMediumSection's TableRow only renders a
          // plain string per cell — combine the two rather than handing it
          // the raw object, which React can't render directly.
          (row.values ?? []).forEach((value: AnySection, i: number) => {
            const cellValue =
              typeof value === "string"
                ? value
                : [value?.title, value?.description].filter(Boolean).join(" — ");
            record[`col${i}`] = cellValue;
          });
          return record;
        }),
        // "How to read this" bullet block — only rendered when a heading is set.
        ...(section.roomreadingTitle
          ? { roomreading: { title: section.roomreadingTitle, items: roomreadingItems } }
          : {}),
        // Closing CTA card — only rendered when a title is set.
        ...(section.ctaTitle
          ? {
            cta: {
              title: section.ctaTitle,
              description: section.ctaDescription ?? "",
              button: section.ctaButtonText || "Get in touch",
              background: "bg-[#F5F9FC]",
            },
          }
          : {}),
      }}
      columnwidth={{
        base: section.columnWidthBase || "220px",
        md: section.columnWidthMd || "340px",
        "3xl": section.columnWidth3xl || "456px",
      }}
      subtitleClass={section.subtitleClass || "max-w-[140ch]"}
      classtitle={section.ctaTitleClass || undefined}
      classdesc={section.ctaDescClass || undefined}
    />
  );
}

function ProcessStepsSection({ section }: { section: AnySection }) {
  return (
    <NumberBox
      // Admin-configurable card style/width/grid — falls back to the
      // iptv-for-cruiseship default when left blank.
      variant={section.variant || "subtitleBorder"}
      approachData={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 7,
        subhead: section.description ?? "",
        data: (section.steps ?? []).map((step: AnySection, i: number) => ({
          number: String(i + 1).padStart(2, "0"),
          title: step.title ?? "",
          description: step.description ?? "",
        })),
      }}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridclass ? { gridclass: section.gridclass } : {})}
    />
  );
}

function FeatureGridSection({ section }: { section: AnySection }) {
  return (
    <WhyChooseUsSection
      // Admin-configurable card style/width — falls back to the default
      // when left blank.
      variant={section.variant || "subtitle"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        points: (section.features ?? []).map((feature: AnySection) => ({
          title: feature.title ?? "",
          description: feature.description ?? "",
        })),
      }}
      subtitleClass={section.subtitleClass || "max-w-full"}
    />
  );
}

function ImageFeatureGridSection({ section }: { section: AnySection }) {
  return (
    <ImageCard
      variant="subtitleBorder"
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
        items: (section.features ?? []).map((feature: AnySection, i: number) => ({
          id: String(i),
          title: feature.title ?? "",
          description: feature.description ?? "",
          image: feature.image ?? "",
        })),
      }}
    />
  );
}

function PartnersSection({ section }: { section: AnySection }) {
  return (
    <PartnersSlider
      // Admin-configurable card style/width — falls back to the
      // iptv-for-cruiseship default when left blank.
      variant={section.variant || "subtitle"}
      headerData={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
      }}
      logo={(section.logos ?? []).map((logo: AnySection) => ({
        src: logo.image ?? "",
        alt: logo.alt ?? "",
      }))}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
    />
  );
}

function TestimonialsSection({ section, testimonials }: { section: AnySection; testimonials: AnySection[] }) {
  return (
    <Testimonials
      header={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
      }}
      data={testimonials.map((item) => ({
        image: item.avatar ?? "",
        name: item.name ?? "",
        role: item.designation ?? "",
        companyLogo: item.companyLogo,
        quote: item.quote ?? "",
      }))}
    />
  );
}

function CtaSection({ section }: { section: AnySection }) {
  return (
    <FooterCta
      data={{
        backgroundImage: section.image ?? "",
        mobbanner: section.mobbanner || section.image || "",
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 11,
        description: section.description ?? "",
        cta: section.buttonText ?? "",
        points: (section.checklist ?? []).map((item: AnySection) => item.text ?? ""),
      }}
      {...(section.sectionspace ? { sectionspace: section.sectionspace } : {})}
      {...(section.descclass ? { descclass: section.descclass } : {})}
    />
  );
}

function FeatureComparisonSection({ section }: { section: AnySection }) {
  return (
    <ComparisonOne
      // Admin-configurable style — falls back to the iptv-for-cruiseship
      // defaults when left blank.
      variant={section.variant || "subtitleBorder"}
      theme={section.theme === "dark" ? "dark" : "light"}
      gridclass={section.gridclass || "grid-cols-2"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      competitorData={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        headers: {
          scenario: section.leftColumnLabel ?? "",
          with: section.rightColumnLabel ?? "",
        },
        table: (section.rows ?? []).map((row: AnySection) => ({
          scenariotitle: row.leftTitle ?? "",
          scenario: row.leftText ?? "",
          withtittle: row.rightTitle ?? "",
          with: row.rightText ?? "",
        })),
      }}
    />
  );
}

function FaqSection({ section }: { section: AnySection }) {
  return (
    <PublicFaqSection
      variant="default"
      faqHeaderData={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 6,
      }}
      faqData={(section.faqs ?? []).map((faq: AnySection) => ({
        question: faq.question ?? "",
        answer: faq.answer ?? "",
      }))}
    />
  );
}

function IndustriesWeServeSection({ section }: { section: AnySection }) {
  return (
    <IndustriesWeServe
      // Admin-configurable card style/width — falls back to the
      // AuditoriumSolutions default when left blank.
      variant={section.variant || "subtitle"}
      subtitleClass={section.subtitleClass || "max-w-[134ch]"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        data: (section.industries ?? []).map((industry: AnySection) => ({
          // Lucide icon name takes priority over the uploaded image — see
          // LucideIcon, which renders an <img> for a "/" or "http" value and
          // a Lucide icon component otherwise.
          icon: industry.iconName || industry.icon || "",
          title: industry.title ?? "",
          description: industry.description ?? "",
          href: "",
        })),
        ...(section.industryCtaTitle
          ? {
            industryCTA: {
              title: section.industryCtaTitle,
              description: section.industryCtaDescription ?? "",
              href: section.industryCtaHref || "#",
            },
          }
          : {}),
      }}
    />
  );
}

function GrayGridSection({ section }: { section: AnySection }) {
  return (
    <GridGraySection
      // Admin-configurable card style/width — falls back to the
      // AuditoriumSolutions default when left blank.
      variant={section.variant || "subtitle"}
      subtitleClass={section.subtitleClass || "max-w-[140ch]"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        items: (section.items ?? []).map((item: AnySection) => ({
          title: item.title ?? "",
          description: item.description ?? "",
        })),
      }}
    />
  );
}

function OverviewCardsSection({ section }: { section: AnySection }) {
  return (
    <OverviewCardsGrid
      // Admin-configurable card style/width — falls back to the
      // AVSolutions default when left blank.
      variant={section.variant || "subtitle"}
      subtitleClass={section.subtitleClass || "max-w-[140ch]"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        image: section.image ?? "",
        cards: (section.cards ?? []).map((card: AnySection, i: number) => ({
          id: String(i),
          titleLine1: card.titleLine1 ?? "",
          titleLine2: card.titleLine2 ?? "",
          description: card.description ?? "",
          highlighted: !!card.highlighted,
        })),
      }}
    />
  );
}

function ProfessionalServicesSection({ section }: { section: AnySection }) {
  return (
    <AvProfessionalServices
      // Admin-configurable card style — falls back to the AVSolutions
      // default when left blank.
      variant={section.variant || "subtitle"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
        offerData: (section.services ?? []).map((service: AnySection) => ({
          // Lucide icon name takes priority over the uploaded image — see
          // LucideIcon, which renders an <img> for a "/" or "http" value and
          // a Lucide icon component otherwise.
          icon: service.iconName || service.icon || "",
          title: service.title ?? "",
          description: service.description ?? "",
          href: service.href || "#",
        })),
      }}
    />
  );
}

function CompetitorComparisonSection({ section }: { section: AnySection }) {
  return (
    <Comparison
      // Admin-configurable card style/width/grid — falls back to the
      // AVSolutions default when left blank.
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridclass ? { gridclass: section.gridclass } : {})}
      competitorData={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 7,
        subhead: section.description ?? "",
        headers: {
          scenario: section.scenarioLabel || "Scenario",
          without: section.withoutLabel || "Other Vendors",
          with: section.withLabel || "GS IT",
        },
        table: (section.rows ?? []).map((row: AnySection) => ({
          scenario: row.scenario ?? "",
          without: row.without ?? "",
          with: row.with ?? "",
        })),
      }}
    />
  );
}

function ImageRowGridSection({ section }: { section: AnySection }) {
  return (
    <ServicesCard
      // Admin-configurable card style/width — falls back to the default
      // when left blank.
      variant={section.variant || "default"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
        items: (section.items ?? []).map((item: AnySection) => ({
          image: item.image ?? "",
          imageAlt: item.imageAlt ?? "",
          title: item.title ?? "",
          description: item.description ?? "",
          href: item.href || undefined,
        })),
      }}
    />
  );
}

function SpecificationTableSection({ section }: { section: AnySection }) {
  const columns = section.columns ?? [];
  const rows = section.rows ?? [];

  return (
    <ThrowDistanceGuide
      // Admin-configurable card style/width — falls back to the default
      // when left blank.
      variant={section.variant || "default"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.ctaDescClass ? { classdesc: section.ctaDescClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
        tablecolumn: columns.map((column: AnySection, i: number) => ({
          key: `key${i + 1}`,
          label: column.label ?? "",
        })),
        items: rows.map((row: AnySection) => {
          const record: Record<string, string> = {};
          (row.values ?? []).forEach((value: string, i: number) => {
            record[`key${i + 1}`] = value ?? "";
          });
          return record as { key1: string };
        }),
        cta: {
          title: section.ctaTitle ?? "",
          description: section.ctaDescription ?? "",
          button: section.ctaButtonText || "Get in touch",
          background: "bg-[#F5F9FC]",
        },
      }}
    />
  );
}
