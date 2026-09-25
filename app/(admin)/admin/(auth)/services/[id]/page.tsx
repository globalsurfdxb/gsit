"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useForm, useFieldArray, Controller, Control, UseFormRegister, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { MdExpandMore } from "react-icons/md";
import { ArrowLeft, ChevronUp, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { sectionTypes } from "../data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import HeroSection from "../HeroSection";
import SectionHeadingSection from "../SectionHeadingSection";
import OverviewSection from "../OverviewSection";
import TabbedGridSection from "../TabbedGridSection";
import FeatureGridSection from "../FeatureGridSection";
import CtaSection from "../CtaSection";
import ProcessStepsSection from "../ProcessStepsSection";
import SolutionsGridSection from "../SolutionsGridSection";
import FaqSection from "../FaqSection";
import TestimonialsSection from "../TestimonialsSection";
import CapabilitiesGridSection from "../CapabilitiesGridSection";
import ImageFeatureGridSection from "../ImageFeatureGridSection";
import ComparisonTableSection from "../ComparisonTableSection";
import MixedFeatureGridSection from "../MixedFeatureGridSection";
import FeatureComparisonSection from "../FeatureComparisonSection";
import IndustriesWeServeSection from "../IndustriesWeServeSection";
import GrayGridSection from "../GrayGridSection";
import OverviewCardsSection from "../OverviewCardsSection";
import ProfessionalServicesSection from "../ProfessionalServicesSection";
import CompetitorComparisonSection from "../CompetitorComparisonSection";
import ImageRowGridSection from "../ImageRowGridSection";
import SpecificationTableSection from "../SpecificationTableSection";
import PartnersSection from "../PartnersSection";
import SeoFields from "@/app/components/common/SeoFields";
import { SeoFormValues } from "@/app/types/seo";
import AdminPageActions from "@/app/components/common/AdminPageActions";
import AdminCustomButton from "@/app/components/common/AdminCustomButton";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const defaultSeo: SeoFormValues = {
  metaTitle: "",
  metaDescription: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  twitterTitle: "",
  twitterDescription: "",
  twitterImage: "",
  schema: "",
};

export interface ServicesFormProps {
  seo: SeoFormValues;
  sections: Section[];
}

interface BaseSection {
  type: string;
}

interface HeroSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  bannercta?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  backgroundImage: string;
  mobbanner?: string;
  stats: { value: string; label: string }[];
  padding?: string;
  descstyle?: string;
  classpointdes?: string;
  highlightLast?: number;
}

interface TrustedBySectionType extends BaseSection {
  eyebrow: string;
  logos: { image: string; alt: string }[];
}

interface SectionHeadingSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
}

interface OverviewSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  spacey?: string;
  maxw?: string;
  highlightLast?: number;
}

interface TabbedGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  tabs: {
    tabName: string;
    cards: {
      image: string;
      titleLine1: string;
      titleLine2: string;
      description: string;
      href: string;
    }[];
  }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
  gridcount?: string;
}

interface FeatureGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface PartnersSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  logos: { image: string; alt: string }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface CtaSectionType extends BaseSection {
  title: string;
  description: string;
  checklist: { text: string }[];
  buttonText: string;
  buttonHref: string;
  image: string;
  eyebrow?: string;
  mobbanner?: string;
  highlightLast?: number;
  sectionspace?: string;
  descclass?: string;
}

interface ProcessStepsSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  steps: { title: string; description: string }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
  gridclass?: string;
}

interface SolutionsGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  cards: {
    icon: string;
    title: string;
    description: string;
    href: string;
    featured: boolean;
  }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
  footerdata?: string;
  gridcount?: string;
}

interface FaqSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  faqs: { question: string; answer: string }[];
  highlightLast?: number;
}

interface TestimonialsSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  // Ids into the shared Testimonial library (see /admin/testimonials) — the
  // section no longer stores testimonial content directly.
  testimonialIds: string[];
  highlightLast?: number;
}

interface CapabilitiesGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: { titleLine1: string; titleLine2: string; description: string }[];
}

interface ImageFeatureGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  features: { image: string; title: string; description: string }[];
  highlightLast?: number;
}

interface ComparisonTableSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  columns: { label: string }[];
  rows: { aspect: string; values: string[] }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
  columnWidthBase?: string;
  columnWidthMd?: string;
  columnWidth3xl?: string;
  roomreadingTitle?: string;
  roomreadingItems?: { text: string }[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaTitleClass?: string;
  ctaDescClass?: string;
}

interface MixedFeatureGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    variant: "content" | "image";
    icon: string;
    title: string;
    description: string;
    image: string;
  }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface FeatureComparisonSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  leftColumnLabel: string;
  rightColumnLabel: string;
  rows: {
    leftTitle: string;
    leftText: string;
    rightTitle: string;
    rightText: string;
  }[];
  highlightLast?: number;
  variant?: string;
  theme?: string;
  subtitleClass?: string;
  gridclass?: string;
}

interface IndustriesWeServeSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  industries: { icon: string; iconName?: string; title: string; description: string }[];
  industryCtaTitle?: string;
  industryCtaDescription?: string;
  industryCtaHref?: string;
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface GrayGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; description: string }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface OverviewCardsSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cards: { titleLine1: string; titleLine2: string; description: string; highlighted?: boolean }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface ProfessionalServicesSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description?: string;
  services: { icon: string; iconName?: string; title: string; description: string; href: string }[];
  highlightLast?: number;
  variant?: string;
}

interface CompetitorComparisonSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  scenarioLabel?: string;
  withoutLabel?: string;
  withLabel?: string;
  rows: { scenario: string; without: string; with: string }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
  gridclass?: string;
}

interface ImageRowGridSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  items: { image: string; imageAlt?: string; title: string; description: string; href?: string }[];
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

interface SpecificationTableSectionType extends BaseSection {
  eyebrow: string;
  title: string;
  description: string;
  columns: { label: string }[];
  rows: { values: string[] }[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaDescClass?: string;
  highlightLast?: number;
  variant?: string;
  subtitleClass?: string;
}

type Section =
  | HeroSectionType
  | TrustedBySectionType
  | SectionHeadingSectionType
  | OverviewSectionType
  | TabbedGridSectionType
  | FeatureGridSectionType
  | PartnersSectionType
  | CtaSectionType
  | ProcessStepsSectionType
  | SolutionsGridSectionType
  | FaqSectionType
  | TestimonialsSectionType
  | CapabilitiesGridSectionType
  | ImageFeatureGridSectionType
  | ComparisonTableSectionType
  | MixedFeatureGridSectionType
  | FeatureComparisonSectionType
  | IndustriesWeServeSectionType
  | GrayGridSectionType
  | OverviewCardsSectionType
  | ProfessionalServicesSectionType
  | CompetitorComparisonSectionType
  | ImageRowGridSectionType
  | SpecificationTableSectionType;

// Trusted By / Partners are shared, site-wide content now — a service just
// selects the section, content is edited once on the Services list page's
// "Trusted By" / "Partners" tabs (GlobalSectionTab).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalSectionPlaceholder = ({
  index,
  control,
  type,
  onRemove,
}: {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  type: string;
  onRemove?: () => void;
}) => (
  <AdminItemContainer expansion={false} onRemove={onRemove}>
    <Label main>{type}</Label>
    <div className="flex items-center justify-between gap-4 p-5 text-sm text-gray-500">
      <Controller
        name={`sections.${index}.type`}
        control={control}
        defaultValue={type}
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <p>Content is managed globally and shared across every service.</p>
      <Link href="/admin/services" className="shrink-0 font-medium text-[#114A9F] hover:underline">
        Edit in {type} tab
      </Link>
    </div>
  </AdminItemContainer>
);

const ServiceEditorPage = () => {
  const params = useParams();
  const id = params.id as string;

  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ServicesFormProps>({
    defaultValues: { sections: [], seo: defaultSeo },
  });
  const [typeMenuOpen, setTypeMenuOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceSlug, setServiceSlug] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [saving, setSaving] = useState(false);

  // useFieldArray keeps each section's registered field values bound to its
  // field.id rather than its array index, so append/remove/move all move the
  // actual form data together with the section instead of just relabeling it.
  const { fields, append, remove, move } = useFieldArray({ control, name: "sections" });

  // Per-section field components work against a loosely-typed control/register
  // since `sections` holds a union of differently-shaped section objects.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionControl = control as unknown as Control<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionRegister = register as unknown as UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionGetValues = getValues as unknown as UseFormGetValues<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionSetValue = setValue as unknown as UseFormSetValue<any>;

  const handleFetchService = async () => {
    try {
      const response = await fetch(`/api/admin/services/${id}`);

      if (response.status === 404) {
        setNotFound(true);
        return;
      }

      const data = await response.json();

      setServiceName(data.data?.name ?? "");
      setServiceSlug(data.data?.slug ?? "");

      // Older saved "Industries We Serve" sections stored a bare Lucide icon
      // name in `icon` before it was split into a separate `iconName` field
      // (with `icon` becoming an uploaded image URL) — migrate that in place
      // so existing icons keep showing instead of the ImageUploader
      // silently discarding a non-URL value.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // const sections = (data.data?.sections ?? []).map((section: any) => {
      //   if (section.type !== "Industries We Serve") return section;
      //   return {
      //     ...section,
      //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //     industries: (section.industries ?? []).map((industry: any) => {
      //       const hasBareIconName = industry.icon && !/^(\/|https?:\/\/)/.test(industry.icon);
      //       if (!hasBareIconName || industry.iconName) return industry;
      //       return { ...industry, iconName: industry.icon, icon: "" };
      //     }),
      //   };
      // });

      
      reset({
        seo: { ...defaultSeo, ...data.data?.seo },
        sections:data.data?.sections,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleFetchService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddSection = (type: string) => {
    setTypeMenuOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    append({ type } as any);
  };

  const handleRemoveSection = (index: number) => {
    remove(index);
  };

  const handleMoveSection = (index: number, direction: -1 | 1) => {
    move(index, index + direction);
  };

  const handleSaveService = async (data: ServicesFormProps) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message ?? "Service updated");
      } else {
        toast.error(result.message ?? "Failed to update service");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update service");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-sm text-gray-500">Loading...</div>;
  }

  if (notFound) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <p className="text-sm text-gray-500">This service doesn&apos;t exist.</p>
        <Link href="/admin/services" className="text-sm font-medium text-[#114A9F] hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleSaveService)} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/services"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">{serviceName || "Service"}</h1>
        </div>
        <AdminPageActions>
          <Link href={`/${serviceSlug}`} target="_blank">
            <AdminCustomButton type="button" text="Visit Page" />
          </Link>
          <AdminCustomButton type="submit" text={saving ? "Saving..." : "Save"} />
        </AdminPageActions>
      </div>

      <div className="flex flex-col gap-4">
        {fields.length === 0 ? (
          <div className="rounded-xl bg-gray-50 py-10 text-center text-sm text-gray-500">
            Start by adding a section below
          </div>
        ) : (
          fields.map((section, index) => (
            <div key={section.id} className="flex flex-col gap-2">
              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  onClick={() => handleMoveSection(index, -1)}
                  disabled={index === 0}
                  aria-label="Move section up"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveSection(index, 1)}
                  disabled={index === fields.length - 1}
                  aria-label="Move section down"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              {section.type === "Hero" && (
                <HeroSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Trusted By" && (
                <GlobalSectionPlaceholder index={index} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Section Heading" && (
                <SectionHeadingSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Overview" && (
                <OverviewSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Tabbed Grid" && (
                <TabbedGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Feature Grid" && (
                <FeatureGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Partners" && (
                <PartnersSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "CTA" && (
                <CtaSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Process Steps" && (
                <ProcessStepsSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Solutions Grid" && (
                <SolutionsGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "FAQ" && (
                <FaqSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Testimonials" && (
                <TestimonialsSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Capabilities Grid" && (
                <CapabilitiesGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Image Feature Grid" && (
                <ImageFeatureGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Comparison Table" && (
                <ComparisonTableSection
                  index={index}
                  register={sectionRegister}
                  control={sectionControl}
                  getValues={sectionGetValues}
                  setValue={sectionSetValue}
                  type={section.type}
                  onRemove={() => handleRemoveSection(index)}
                />
              )}
              {section.type === "Mixed Feature Grid" && (
                <MixedFeatureGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Feature Comparison" && (
                <FeatureComparisonSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Industries We Serve" && (
                <IndustriesWeServeSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Gray Grid" && (
                <GrayGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Overview Cards" && (
                <OverviewCardsSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Professional Services" && (
                <ProfessionalServicesSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Competitor Comparison" && (
                <CompetitorComparisonSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Image Row Grid" && (
                <ImageRowGridSection index={index} register={sectionRegister} control={sectionControl} type={section.type} onRemove={() => handleRemoveSection(index)} />
              )}
              {section.type === "Specification Table" && (
                <SpecificationTableSection
                  index={index}
                  register={sectionRegister}
                  control={sectionControl}
                  getValues={sectionGetValues}
                  setValue={sectionSetValue}
                  type={section.type}
                  onRemove={() => handleRemoveSection(index)}
                />
              )}
            </div>
          ))
        )}

        <div>
          <Button
            type="button"
            variant="secondary"
            className="gap-1.5 w-full"
            onClick={() => setTypeMenuOpen(true)}
          >
            Add section <MdExpandMore className="text-lg" />
          </Button>
        </div>

        <Dialog open={typeMenuOpen} onOpenChange={setTypeMenuOpen}>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>Add a section</DialogTitle>
              <DialogDescription>Choose a section type to add to the page.</DialogDescription>
            </DialogHeader>
            <div className="grid flex-1 min-h-0 auto-rows-min grid-cols-1 gap-4 overflow-y-auto pt-4 pr-1 sm:grid-cols-2">
              {sectionTypes.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAddSection(item.name)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-gray-50 text-left ring-1 ring-transparent transition-all hover:ring-[#114A9F]/40"
                >
                  <div className="relative aspect-2/1 w-full overflow-hidden bg-gray-100">
                    {item.icon ? (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                        No preview
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 p-3">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <SeoFields control={control} register={register} errors={errors} />
    </form>
  );
};

export default ServiceEditorPage;
