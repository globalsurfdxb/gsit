"use client";

import ClientSideLink from "@/app/(admin)/admin/client-side-link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
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
} from "lucide-react";

type Category = { _id: string; title: string; slug: string };

const AdminNavbar = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/admin/products/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => {});
  }, []);

  const navItems = [
    // { name: "Home", href: "/admin/home", icon: Home },
    // { name: "About", href: "/admin/about", icon: Info },
    // {
    //   name: "Products",
    //   href: "/admin/products/main",
    //   icon: Info,
    //   hasChild: true,
    //   children: [
    //     { name: "Main Page", href: "/admin/products/main" },
    //     ...categories.map((cat) => ({
    //       name: cat.title,
    //       href: `/admin/products/${cat.slug}`,
    //     })),
    //   ],
    // },
    // {
    //   name: "Sustainability",
    //   href: "/admin/sustainability",
    //   icon: Leaf,
    // },
    // { name: "Technology", href: "/admin/technology", icon: Cpu },
    // {
    //   name: "Design Philosophy",
    //   href: "/admin/design-philosophy",
    //   icon: Compass,
    // },
    // { name: "Blogs", href: "/admin/blogs", icon: BookOpen },
    // { name: "News", href: "/admin/news", icon: Newspaper },
    
    // { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    // {
    //   name: "Digital Catalogue",
    //   href: "/admin/digital-catalogue",
    //   icon: LayoutGrid,
    // },
    // {
    //   name: "Contact",
    //   href: "#",
    //   icon: Phone,
    //   hasChild: true,
    //   children: [
    //     { name: "Main Page", href: "/admin/contact" },
    //     { name: "Enquiries", href: "/admin/contact/enquiries" },
    //   ],
    // },
    // { name: "Settings", href: "/admin/settings", icon: Settings },
    { name: "Services", href: "/admin/services", icon: Briefcase },
    {
      name: "Common",
      href: "##",
      icon: LayoutGrid,
      hasChild: true,
      children: [
        { name: "Testimonials", href: "/admin/common/testimonials" },
        { name: "Variables", href: "/admin/common/variables" },
      ],
    },
  ];

  const isItemActive = (item: (typeof navItems)[number]) => {
    const ownMatch =
      pathname === item.href || pathname?.startsWith(`${item.href}/`);
    const childMatch = item.children?.some(
      (child) =>
        pathname === child.href || pathname?.startsWith(`${child.href}/`),
    );
    return ownMatch || childMatch;
  };

  const [openLink, setOpenLink] = useState<string | null>(null);

  useEffect(() => {
    const activeParent = navItems.find(
      (item) => item.hasChild && isItemActive(item),
    );
    setOpenLink(activeParent?.href ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, categories]);

  return navItems.map((item, index) => {
    const Icon = item.icon;
    return (
      <ClientSideLink
        key={index}
        href={item.href}
        name={item.name}
        icon={<Icon className="h-5 w-5" />}
        isOpen={openLink === item.href}
        setOpenLink={setOpenLink}
        hasChild={item.hasChild}
        isActiveOverride={isItemActive(item)}
      >
        {item.children}
      </ClientSideLink>
    );
  });
};

export default AdminNavbar;
