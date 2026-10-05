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
import BusinessImpactGrid from "@/app/components/common/Boxgrid/BoxCard";
import AvProfessionalServices from "@/app/components/AVSolutions/Sections/AvProfessionalServices";
import Comparison from "@/app/components/common/Comparison";
import ServicesCard from "@/app/components/common/ServicesCard";
import ThrowDistanceGuide from "@/app/components/common/Throwdistanceguide";
import GridCard from "@/app/components/common/TabCard/GridCard";
import SecuritySolved from "@/app/components/CctvInstallationMaintenance/Sections/SecuritySolved";
import CardSectionLte from "@/app/components/common/CardSectionLte";
import GridSpace from "@/app/components/common/GridThree/gridspace";
import ChecklistBanner from "@/app/components/CloudSolutions/Sections/Banner";
import KeypointsBanner, { type FeatureItem as KeypointsHeroData } from "@/app/components/elv/Sections/Banner";
import MixedOverviewGrid, { type OverviewData as MixedOverviewData } from "@/app/components/elv/Sections/OverviewGrid";
import IconTextGrid, { type FeatureItem as IconTextGridData } from "@/app/components/ResidentItEngineerAmc/section/IconCard/IconCard";
import AccordionImageSwap from "@/app/components/InteractiveDisplay/Sections/RoomFit";
import ComponentAccordion from "@/app/components/IpPhone/Sections/IPTelephoneSystem";
import ChecklistGrid, { type ChecklistData as ChecklistGridData } from "@/app/components/common/Grid/GridcornerImage";
import OverviewShowcase, { type ITArchitectureData as OverviewShowcaseData } from "@/app/components/IptvHospitality/sections/Overview";
import ColumnListGrid, { type ZoneCoverageContent as ColumnListGridData } from "@/app/components/IptvHospitality/sections/ZoneCoverage";
import FeaturedImageCardGrid, { type IntegrationsContent as FeaturedImageCardGridData } from "@/app/components/IptvHospitality/sections/Integrations";
import IconRowList, { type dataitem as IconRowListData } from "@/app/components/IptvSolutions/section/LearningEnvironmentsSection";
import PointsImageGrid, { type dataitem as PointsImageGridData } from "@/app/components/IptvSolutions/section/LicensingComplianceSection";
import IssueListCta, { type StrugglingIssuesData as IssueListCtaData } from "@/app/components/ItInfrastructure/Sections/StrugglingIssuesSection";
import TitleStatsGrid, { type TrackRecordData as TitleStatsGridData } from "@/app/components/ItInfrastructure/Sections/TrackRecordSection";
import FitChecklistGrid from "@/app/components/ItServices/Sections/WhoisThisFor";
import NumberedArrowSteps from "@/app/components/ItServices/Sections/GsitDifference";
import FeatureVideoGrid, { type frdata as FeatureVideoGridData } from "@/app/components/MeetingRoom/Sections/Overview";
import RangeAccordion, { type frdata as RangeAccordionData } from "@/app/components/MeetingRoom/Sections/RoomConfig";
import LogoSideHeader from "@/app/components/MeetingRoom/Sections/PlatformCompatibility";
import SplitOverview from "@/app/components/CloudSolutions/Sections/Overview";
import IconCardRow from "@/app/components/CloudSolutions/Sections/CloudSolutions";
import ServicesGrid from "@/app/components/common/ServicesGrid";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import GridNumber from "@/app/components/common/GridNumber";
import IconbgCardGrid from "@/app/components/common/IconbgCardGrid";
import UnderstandingCybersecurity from "@/app/components/CyberSecurity/Sections/UnderstandingCybersecurity";
import BusinessResilience from "@/app/components/CyberSecurity/Sections/BusinessResilience";
import SplitFeatureGrid from "@/app/components/common/PostDevelopmentSection";
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
        case "Image Card Grid":
          return <ImageCardGridSection key={index} section={section} />;
        case "Issues Solved":
          return <IssuesSolvedSection key={index} section={section} />;
        case "Benefit Cards":
          return <BenefitCardsSection key={index} section={section} />;
        case "Why Us Grid":
          return <WhyUsGridSection key={index} section={section} />;
        case "Checklist Banner":
          return <ChecklistBannerSection key={index} section={section} />;
        case "Split Overview":
          return <SplitOverviewSection key={index} section={section} />;
        case "Icon Card Row":
          return <IconCardRowSection key={index} section={section} />;
        case "Solution Cards":
          return <SolutionCardsSection key={index} section={section} />;
        case "Numbered Steps Grid":
          return <NumberedStepsGridSection key={index} section={section} />;
        case "Impact Cards":
          return <ImpactCardsSection key={index} section={section} />;
        case "Stat Cards":
          return <StatCardsSection key={index} section={section} />;
        case "Split Icon Cards":
          return <SplitIconCardsSection key={index} section={section} />;
        case "Split Feature Grid":
          return <SplitFeatureGridSection key={index} section={section} />;
        case "Business Impact Cards":
          return <BusinessImpactCardsSection key={index} section={section} />;
        case "Hero (Keypoints)":
          return <KeypointsHeroSection key={index} section={section} />;
        case "Overview Grid (Mixed)":
          return <MixedOverviewGridSection key={index} section={section} />;
        case "Icon Text Grid":
          return <IconTextGridSection key={index} section={section} />;
        case "Accordion Image Swap":
          return <AccordionImageSwapSection key={index} section={section} />;
        case "Component Accordion":
          return <ComponentAccordionSection key={index} section={section} />;
        case "Checklist Grid":
          return <ChecklistGridSection key={index} section={section} />;
        case "Overview Showcase":
          return <OverviewShowcaseSection key={index} section={section} />;
        case "Column List Grid":
          return <ColumnListGridSection key={index} section={section} />;
        case "Featured Image Card Grid":
          return <FeaturedImageCardGridSection key={index} section={section} />;
        case "Icon Row List":
          return <IconRowListSection key={index} section={section} />;
        case "Points & Image Grid":
          return <PointsImageGridSection key={index} section={section} />;
        case "Issue List CTA":
          return <IssueListCtaSection key={index} section={section} />;
        case "Title Stats Grid":
          return <TitleStatsGridSection key={index} section={section} />;
        case "Fit Checklist Grid":
          return <FitChecklistGridSection key={index} section={section} />;
        case "Numbered Arrow Steps":
          return <NumberedArrowStepsSection key={index} section={section} />;
        case "Feature Video Grid":
          return <FeatureVideoGridSection key={index} section={section} />;
        case "Range Accordion":
          return <RangeAccordionSection key={index} section={section} />;
        case "Logo Side Header":
          return <LogoSideHeaderSection key={index} section={section} />;
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
      bgButton: section.primaryButtonBg || "bg-primary",
      dark: section.primaryButtonDark ?? true,
    },
    section.secondaryButtonText && {
      text: section.secondaryButtonText,
      href: section.secondaryButtonHref || "#",
      icon: "arrow",
      bgButton: section.secondaryButtonBg || "bg-white",
      dark: section.secondaryButtonDark ?? false,
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
      darkMode={!!section.darkMode}
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
        mobbanner: section.mobbanner || section.image || "",
        ...(section.primarytext ? { primarytext: section.primarytext } : {}),
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
      {...(section.ctaDescClass ? { classdesc: section.ctaDescClass } : {})}
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
        items: (section.items ?? []).map((item: AnySection) => {
          if (item.variant === "image") {
            return { type: "image", image: item.image ?? "", title: item.title ?? "" };
          }
          if (item.variant === "cta") {
            return {
              type: "cta",
              title: item.title ?? "",
              description: item.description ?? "",
              href: item.href || "#",
            };
          }
          return {
            type: "card",
            icon: item.icon || item.iconName || "",
            title: item.title ?? "",
            description: item.description ?? "",
          };
        }),
      }}
      subtitleClass={section.subtitleClass || "lg:max-w-[32ch] xl:max-w-[50ch]"}
      cardType={section.cardType || "two"}
      {...(section.bgColor ? { bgColor: section.bgColor } : {})}
    />
  );
}

function SolutionsGridSection({ section }: { section: AnySection }) {
  return (
    <div className={section.titleColor || ""}>
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
        ...(section.ctaTitle
          ? {
            cta: {
              title: section.ctaTitle,
              description: section.ctaDescription ?? "",
              button: section.ctaButtonText || "",
              background: "bg-[#F5F9FC]",
            },
          }
          : {}),
      }}
      gridcount={Number(section.gridcount) || 3}
      redtheme={!!section.redtheme}
      arrow={!!section.arrow}
      {...(section.bg ? { bg: section.bg } : {})}
      {...(section.iconbg ? { iconbg: section.iconbg } : {})}
      // {...(section.titleColor ? { titleColor: section.titleColor } : {})}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
    />
    </div>
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
          ...(step.url ? { url: step.url } : {}),
        })),
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
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridclass ? { gridclass: section.gridclass } : {})}
      {...(section.ctaDescClass ? { classdesc: section.ctaDescClass } : {})}
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
      // Admin-configurable style — falls back to the iptv-for-cruiseship
      // default when left blank.
      variant={section.variant || "subtitleBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridcount ? { gridclass: Number(section.gridcount) } : {})}
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
        subhead: section.description ?? "",
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
        ctaHref: section.buttonHref || undefined,
        secondaryCta: section.secondaryButtonText || undefined,
        secondaryCtaHref: section.secondaryButtonHref || undefined,
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
        ...(section.ctaTitle
          ? {
            cta: {
              title: section.ctaTitle,
              description: section.ctaDescription ?? "",
              button: section.ctaButtonText || "Let's Connect",
              background: "bg-[#F5F9FC]",
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

function BusinessImpactCardsSection({ section }: { section: AnySection }) {
  return (
    <BusinessImpactGrid
      variant={section.variant || "default"}
      subtitleClass={section.subtitleClass || "max-w-[40ch]"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        image: "",
        cards: (section.cards ?? []).map((card: AnySection, i: number) => ({
          id: String(i),
          titleLine1: card.titleLine1 ?? "",
          titleLine2: card.titleLine2 ?? "",
          description: card.description ?? "",
        })),
      }}
    />
  );
}

function KeypointsHeroSection({ section }: { section: AnySection }) {
  const buttons = [
    section.primaryButtonText && {
      text: section.primaryButtonText,
      href: section.primaryButtonHref || "#",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
    },
    section.secondaryButtonText && {
      text: section.secondaryButtonText,
      href: section.secondaryButtonHref || "#",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
    },
  ].filter(Boolean) as KeypointsHeroData["buttons"];

  const bannerData: KeypointsHeroData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 5,
    description: section.description ?? "",
    bannercta: section.bannercta ?? "",
    backgroundImage: section.backgroundImage ?? "",
    mobbanner: section.mobbanner || section.backgroundImage || "",
    keypoints: (section.keypoints ?? []).map((point: AnySection) => point.text ?? ""),
    buttons,
  };

  return (
    <KeypointsBanner
      bannerData={bannerData}
      padding={section.padding || "pt-[280px] pb-4 md:py-[82px] lg:py-[80px] 2xl:py-[128px] 3xl:py-[145.5px]"}
      descstyle={section.descstyle || "max-w-[56ch]"}
    />
  );
}

function MixedOverviewGridSection({ section }: { section: AnySection }) {
  const data: MixedOverviewData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 5,
    subhead: section.description ?? "",
    cardsitem: (section.items ?? []).map((item: AnySection, i: number) => {
      if (item.variant === "image") {
        return { id: String(i), type: "image", image: item.image ?? "" };
      }
      if (item.variant === "highlight") {
        return { id: String(i), type: "highlight", description: item.description ?? "" };
      }
      return {
        id: String(i),
        type: "text",
        icon: item.icon ?? "",
        titleLine1: item.titleLine1 ?? "",
        titleLine2: item.titleLine2 ?? "",
        description: item.description ?? "",
      };
    }),
  };

  return (
    <MixedOverviewGrid
      variant={section.variant || "subtitle"}
      subtitleClass={section.subtitleClass || "max-w-[133ch]"}
      data={data}
    />
  );
}

function IconTextGridSection({ section }: { section: AnySection }) {
  const data: IconTextGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 5,
    subhead: section.description ?? "",
    servicesData: (section.cards ?? []).map((card: AnySection) => ({
      // Lucide icon name takes priority over the uploaded image.
      icon: card.iconName || card.icon || "",
      title: card.title ?? "",
      description: card.description ?? "",
      href: "#",
      featured: false,
    })),
  };

  return (
    <IconTextGrid
      variant={section.variant || "subtitle"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridcount ? { gridcount: Number(section.gridcount) } : {})}
      data={data}
    />
  );
}

function AccordionImageSwapSection({ section }: { section: AnySection }) {
  return (
    <AccordionImageSwap
      variant={section.variant || "subtitleBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        items: (section.items ?? []).map((item: AnySection, i: number) => ({
          id: String(i),
          size: item.size ?? "",
          idealFor: item.idealFor ?? "",
          typicalSettings: item.typicalSettings ?? "",
          image: item.image ?? "",
        })),
      }}
    />
  );
}

function ComponentAccordionSection({ section }: { section: AnySection }) {
  return (
    <ComponentAccordion
      variant={section.variant || "subtitleBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 6,
        subhead: section.description ?? "",
        items: (section.items ?? []).map((item: AnySection, i: number) => ({
          id: String(i),
          component: item.component ?? "",
          description: item.description ?? "",
          image: item.image ?? "",
        })),
      }}
    />
  );
}

function ChecklistGridSection({ section }: { section: AnySection }) {
  const data: ChecklistGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 3,
    subhead: section.description ?? "",
    checklistItems: (section.items ?? []).map((item: AnySection, i: number) =>
      item.variant === "image"
        ? { id: String(i), type: "image", image: item.image ?? "" }
        : {
            id: String(i),
            type: "text",
            icon: item.icon ?? "",
            title: item.title ?? "",
            description: item.description ?? "",
          },
    ),
  };

  return (
    <ChecklistGrid
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={data}
    />
  );
}

function OverviewShowcaseSection({ section }: { section: AnySection }) {
  const data: OverviewShowcaseData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 6,
    subhead: section.description ?? "",
    featured: {
      image: section.featuredImage ?? "",
      alt: section.featuredAlt ?? "",
      title: section.featuredTitle ?? "",
      description: section.featuredDescription ?? "",
    },
    cards: (section.cards ?? []).map((card: AnySection) => ({
      titleLines: [card.titleLine1, card.titleLine2].filter(Boolean),
      description: card.description ?? "",
    })),
    accentCard: { description: section.accentDescription ?? "" },
  };

  return (
    <OverviewShowcase
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={data}
    />
  );
}

function ColumnListGridSection({ section }: { section: AnySection }) {
  const data: ColumnListGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 2,
    subhead: section.description ?? "",
    columns: (section.columns ?? []).map((column: AnySection) => ({
      title: column.title ?? "",
      zones: (column.zones ?? []).map((zone: AnySection) => ({
        title: zone.title ?? "",
        description: zone.description ?? "",
      })),
    })),
  };

  return (
    <ColumnListGrid
      variant={section.variant || "subtitle"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={data}
    />
  );
}

function FeaturedImageCardGridSection({ section }: { section: AnySection }) {
  const data: FeaturedImageCardGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 5,
    subhead: section.description ?? "",
    featured: {
      image: section.featuredImage ?? "",
      alt: section.featuredAlt ?? "",
    },
    cards: (section.cards ?? []).map((card: AnySection) => ({
      title: card.title ?? "",
      description: card.description ?? "",
    })),
    cta: {
      title: section.ctaTitle ?? "",
      description: section.ctaDescription ?? "",
      button: section.ctaButtonText || "Get in touch",
      background: "bg-[#F5F9FC]",
    },
  };

  return (
    <FeaturedImageCardGrid
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={data}
    />
  );
}

function IconRowListSection({ section }: { section: AnySection }) {
  const data: IconRowListData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 4,
    subhead: section.description ?? "",
    data: (section.rows ?? []).map((row: AnySection) => ({
      // Lucide icon name takes priority over the uploaded image.
      icon: row.iconName || row.icon || "",
      title: row.title ?? "",
      description: row.description ?? "",
    })),
  };

  return (
    <IconRowList
      variant={section.variant || "subtitleBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={data}
    />
  );
}

function PointsImageGridSection({ section }: { section: AnySection }) {
  const data: PointsImageGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 6,
    subhead: section.description ?? "",
    image: section.image ?? "",
    imageAlt: section.imageAlt ?? "",
    points: (section.points ?? []).map((point: AnySection) => ({
      // Lucide icon name takes priority over the uploaded image.
      icon: point.iconName || point.icon || "",
      title: point.title ?? "",
      description: point.description ?? "",
    })),
    ...(section.note ? { note: section.note } : {}),
  };

  return (
    <PointsImageGrid
      variant={section.variant || "subtitleBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={data}
    />
  );
}

function IssueListCtaSection({ section }: { section: AnySection }) {
  const data: IssueListCtaData = {
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 1,
    ctaText: section.ctaText ?? "",
    ctaHref: section.ctaHref || "#",
    issues: (section.issues ?? []).map((issue: AnySection) => ({
      icon: issue.icon ?? "",
      text: issue.text ?? "",
    })),
  };

  return <IssueListCta data={data} />;
}

function TitleStatsGridSection({ section }: { section: AnySection }) {
  const data: TitleStatsGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 3,
    subhead: section.description ?? "",
    stats: (section.stats ?? []).map((stat: AnySection) => ({
      title: stat.title ?? "",
      description: stat.description ?? "",
    })),
  };

  return <TitleStatsGrid data={data} />;
}

function FitChecklistGridSection({ section }: { section: AnySection }) {
  return (
    <FitChecklistGrid
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
      }}
      columns={(section.columns ?? []).map((column: AnySection) => ({
        title: column.title ?? "",
        items: (column.items ?? []).map((item: AnySection) => ({
          description: item.description ?? "",
          type: item.icon === "alert" ? "alert" : "check",
        })),
      }))}
    />
  );
}

function NumberedArrowStepsSection({ section }: { section: AnySection }) {
  return (
    <NumberedArrowSteps
      variant={section.variant || "subtitleBorder"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 5,
        description: section.description ?? "",
        data: (section.steps ?? []).map((step: AnySection, i: number) => ({
          number: String(i + 1).padStart(2, "0"),
          title: step.title ?? "",
          description: step.description ?? "",
          tag: step.tag ?? "",
        })),
      }}
    />
  );
}

function FeatureVideoGridSection({ section }: { section: AnySection }) {
  const data: FeatureVideoGridData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 5,
    subhead: section.description ?? "",
    features: (section.features ?? []).map((feature: AnySection) => ({
      titleLine1: feature.titleLine1 ?? "",
      titleLine2: feature.titleLine2 ?? "",
      description: feature.description ?? "",
      featured: !!feature.featured,
      pattern: !!feature.pattern,
    })),
    video: {
      thumbnail: section.videoThumbnail ?? "",
      videoUrl: section.videoUrl ?? "",
    },
  };

  return (
    <FeatureVideoGrid
      rightFitData={data}
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
    />
  );
}

function RangeAccordionSection({ section }: { section: AnySection }) {
  const data: RangeAccordionData = {
    tag: section.eyebrow ?? "",
    heading: section.title ?? "",
    highlightLast: Number(section.highlightLast) || 3,
    subhead: section.description ?? "",
    items: (section.items ?? []).map((item: AnySection, i: number) => ({
      id: String(i),
      range: item.range ?? "",
      title: item.title ?? "",
      description: item.description ?? "",
      image: item.image ?? "",
    })),
  };

  return (
    <RangeAccordion
      roomConfigData={data}
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
    />
  );
}

function LogoSideHeaderSection({ section }: { section: AnySection }) {
  return (
    <LogoSideHeader
      variant={section.variant || "subtitle"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        logo: (section.logos ?? []).map((logo: AnySection) => ({
          src: logo.image ?? "",
          alt: logo.alt ?? "",
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
          image: service.image ?? "",
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
      {...(section.ctaDescClass ? { classdesc: section.ctaDescClass } : {})}
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

function SplitFeatureGridSection({ section }: { section: AnySection }) {
  return (
    <SplitFeatureGrid
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      imagePosition={section.imagePosition || "center"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 1,
        subhead: section.description ?? "",
        image: section.image ?? "",
        imageAlt: section.imageAlt ?? "",
        leftItems: (section.leftItems ?? []).map((item: AnySection) => ({
          icon: item.icon || undefined,
          title: item.title ?? "",
          description: item.description ?? "",
        })),
        rightItems: (section.rightItems ?? []).map((item: AnySection) => ({
          icon: item.icon || undefined,
          title: item.title ?? "",
          description: item.description ?? "",
        })),
      }}
    />
  );
}

function SplitIconCardsSection({ section }: { section: AnySection }) {
  return (
    <BusinessResilience
      variant={section.variant || "subtitle"}
      linkvariant={section.linked ? "link" : "default"}
      {...(section.classheight ? { classheight: section.classheight } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        subhead: section.description ?? "",
        table: (section.cards ?? []).map((card: AnySection) => ({
          // Lucide icon name takes priority over the uploaded image.
          icon: card.iconName || card.icon || "",
          title: card.title ?? "",
          description: card.description ?? "",
          href: card.href || "#",
        })),
      }}
    />
  );
}

function StatCardsSection({ section }: { section: AnySection }) {
  return (
    <UnderstandingCybersecurity
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
        subhead: section.description ?? "",
        StatCard: (section.stats ?? []).map((stat: AnySection) => ({
          stat: stat.stat ?? "",
          statSuffix: stat.statSuffix ?? "",
          title: stat.title ?? "",
          description: stat.description ?? "",
        })),
      }}
    />
  );
}

function ImpactCardsSection({ section }: { section: AnySection }) {
  return (
    <IconbgCardGrid
      variant={section.variant || "defaultBorder"}
      linkvariant={section.linked === false ? "default" : "link"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridCols ? { gridCols: section.gridCols } : {})}
      {...(section.classheight ? { classheight: section.classheight } : {})}
      {...(section.titlebrake ? { titlebrake: section.titlebrake } : {})}
      {...(section.myclass ? { myclass: section.myclass } : {})}
      sectionData={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
        table: (section.cards ?? []).map((card: AnySection) => ({
          // Lucide icon name takes priority over the uploaded image.
          icon: card.iconName || card.icon || "",
          title: card.title ?? "",
          description: card.description ?? "",
          ...(card.href ? { href: card.href } : {}),
        })),
      }}
    />
  );
}

function NumberedStepsGridSection({ section }: { section: AnySection }) {
  return (
    <GridNumber
      variant={section.variant || "subtitle"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.gridclass ? { gridclass: section.gridclass } : {})}
      {...(section.boxheight ? { boxheight: section.boxheight } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 2,
        subhead: section.description ?? "",
        data: (section.steps ?? []).map((step: AnySection, i: number) => ({
          number: String(i + 1).padStart(2, "0"),
          title: step.title ?? "",
          description: step.description ?? "",
        })),
      }}
    />
  );
}

function SolutionCardsSection({ section }: { section: AnySection }) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={{
            tag: section.eyebrow ?? "",
            heading: section.title ?? "",
            highlightLast: Number(section.highlightLast) || 4,
            subhead: section.description ?? "",
          }}
          variant={section.variant || "subtitleBorder"}
          {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
        />
        <ServicesGrid
          data={(section.cards ?? []).map((card: AnySection) => ({
            // Lucide icon name takes priority over the uploaded image.
            icon: card.iconName || card.icon || "",
            title: card.title ?? "",
            description: card.description ?? "",
            href: card.href || "#",
          }))}
          classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 "
          minheight="min-h-[302.5px]"
        />
      </div>
    </section>
  );
}

function IconCardRowSection({ section }: { section: AnySection }) {
  return (
    <IconCardRow
      variant={section.variant || "defaultBorder"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 4,
        // SectionHeader reads `subhead`; the component's own type calls it `description`.
        subhead: section.description ?? "",
        description: section.description ?? "",
        data: (section.cards ?? []).map((card: AnySection) => ({
          // Lucide icon name takes priority over the uploaded image.
          icon: card.iconName || card.icon || "",
          title: card.title ?? "",
          description: card.description ?? "",
          href: card.href || "#",
          featured: false,
        })),
      }}
    />
  );
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function SplitOverviewSection({ section }: { section: AnySection }) {
  // The component injects `desc` as raw HTML, so escape the admin's text and
  // wrap each blank-line-separated paragraph in a <p> ourselves.
  const desc = (section.description ?? "")
    .split(/\n\s*\n/)
    .map((paragraph: string) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph: string) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("");

  return (
    <SplitOverview
      variant={section.variant || "default"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
        desc,
        cta: section.primarytext ?? "",
      }}
    />
  );
}

function ChecklistBannerSection({ section }: { section: AnySection }) {
  return (
    <ChecklistBanner
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 5,
        desc: section.description ?? "",
        backgroundImage: section.backgroundImage ?? "",
        mobbanner: section.mobbanner || section.backgroundImage || "",
        points: (section.points ?? []).map((point: AnySection) => point.text ?? "").filter(Boolean),
        cta1: section.primaryButtonText ?? "",
        cta1Href: section.primaryButtonHref || undefined,
        cta2: section.secondaryButtonText ?? "",
        cta2Href: section.secondaryButtonHref || undefined,
      }}
    />
  );
}

function WhyUsGridSection({ section }: { section: AnySection }) {
  return (
    <GridSpace
      variant={section.variant || "subtitle"}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      {...(section.minheight ? { minheight: section.minheight } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
        subhead: section.description ?? "",
        whygs: (section.items ?? []).map((item: AnySection) => ({
          title: item.title ?? "",
          description: item.description ?? "",
          ...(item.url ? { url: item.url } : {}),
        })),
      }}
    />
  );
}

function BenefitCardsSection({ section }: { section: AnySection }) {
  return (
    <CardSectionLte
      variant={section.variant || "subtitleBorder"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 5,
        subhead: section.description ?? "",
        items: (section.items ?? []).map((item: AnySection) => ({
          title: item.title ?? "",
          description: item.description ?? "",
        })),
      }}
    />
  );
}

function IssuesSolvedSection({ section }: { section: AnySection }) {
  return (
    <SecuritySolved
      variant={section.variant || "subtitleBorder"}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
        description: section.description ?? "",
        image: section.image ?? "",
        points: (section.points ?? []).map((point: AnySection) => ({
          // Lucide icon name takes priority over the uploaded image — see
          // LucideIcon, which renders an <img> for a "/" or "http" value.
          icon: point.iconName || point.icon || "",
          text: point.text ?? "",
        })),
      }}
    />
  );
}

function ImageCardGridSection({ section }: { section: AnySection }) {
  return (
    <GridCard
      variant={section.variant || "default"}
      gridcount={(section.gridcount || "3") as "2" | "3" | "4" | "5" | "6"}
      border={section.showDivider !== false}
      {...(section.subtitleClass ? { subtitleClass: section.subtitleClass } : {})}
      data={{
        tag: section.eyebrow ?? "",
        heading: section.title ?? "",
        highlightLast: Number(section.highlightLast) || 3,
        subhead: section.description ?? "",
        cardsitem: (section.cards ?? []).map((card: AnySection, i: number) => ({
          id: String(i),
          titleLine1: card.titleLine1 ?? "",
          titleLine2: card.titleLine2 ?? "",
          description: card.description ?? "",
          image: card.image ?? "",
          url: card.href || "#",
        })),
        // Extra CTA card — only rendered when a title is set.
        ...(section.ctaTitle
          ? {
            cta: {
              title: section.ctaTitle,
              description: section.ctaDescription ?? "",
              buttonText: section.ctaButtonText || "Get in touch",
              href: section.ctaHref || "#",
            },
          }
          : {}),
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
          button: section.ctaButtonText || "",
          background: "bg-[#F5F9FC]",
        },
      }}
    />
  );
}
