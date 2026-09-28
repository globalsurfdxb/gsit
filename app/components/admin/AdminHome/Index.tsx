import Link from "next/link";
import {
  Home as HomeIcon,
  Info,
  Leaf,
  Cpu,
  Compass,
  BookOpen,
  Newspaper,
  Briefcase,
  FolderKanban,
  LayoutGrid,
  Settings,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import AnimatedTitle from "../../admin/animations/AnimatedTitle";
import SectionDescription from "../../admin/animations/SectionDescription";

const quickLinks = [
  // {
  //   name: "Home Page",
  //   href: "/admin/home",
  //   icon: HomeIcon,
  //   description: "Update hero content and homepage sections",
  // },
  // {
  //   name: "About",
  //   href: "/admin/about",
  //   icon: Info,
  //   description: "Manage company story and about page",
  // },
  // {
  //   name: "Products",
  //   href: "/admin/products/main",
  //   icon: LayoutGrid,
  //   description: "Edit product catalogue and categories",
  // },
  // {
  //   name: "Sustainability",
  //   href: "/admin/sustainability",
  //   icon: Leaf,
  //   description: "Manage sustainability initiatives content",
  // },
  // {
  //   name: "Technology",
  //   href: "/admin/technology",
  //   icon: Cpu,
  //   description: "Update technology page details",
  // },
  // {
  //   name: "Design Philosophy",
  //   href: "/admin/design-philosophy",
  //   icon: Compass,
  //   description: "Edit design philosophy content",
  // },
  // {
  //   name: "Blogs",
  //   href: "/admin/blogs",
  //   icon: BookOpen,
  //   description: "Write and publish blog posts",
  // },
  // {
  //   name: "News",
  //   href: "/admin/news",
  //   icon: Newspaper,
  //   description: "Manage news and announcements",
  // },
  {
    name: "Services",
    href: "/admin/services",
    icon: Briefcase,
    description: "Update the services offered",
  },
  // {
  //   name: "Projects",
  //   href: "/admin/projects",
  //   icon: FolderKanban,
  //   description: "Showcase and manage project listings",
  // },
  // {
  //   name: "Enquiries",
  //   href: "/admin/contact/enquiries",
  //   icon: Phone,
  //   description: "Review incoming customer enquiries",
  // },
  // {
  //   name: "Settings",
  //   href: "/admin/settings",
  //   icon: Settings,
  //   description: "Configure general site settings",
  // },
];

const Welcome = () => {
  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-[#114A9F] px-8 py-12 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-24 h-40 w-40 rounded-full bg-white/5"
          aria-hidden
        />
        <div className="relative flex flex-col gap-4">
          <AnimatedTitle
            text="Welcome to the GS IT Admin Dashboard"
            className="text-3xl sm:text-4xl font-semibold text-white"
            skipIntroWait
          />
          <SectionDescription
            direction="y"
            text="Use this dashboard to manage and update your website content."
            className="text-base sm:text-lg text-white/80 max-w-xl"
          />
        </div>
      </div>

      {/* Quick access */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Quick access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map(({ name, href, icon: Icon, description }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(17,74,159,0.25)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#114A9F]/10 text-[#114A9F] transition-colors group-hover:bg-[#114A9F] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="font-medium text-gray-900 truncate">{name}</p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:text-[#114A9F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
