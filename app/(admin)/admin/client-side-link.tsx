"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { memo } from "react";
import { MdExpandCircleDown } from "react-icons/md";

interface ClientSideLinkProps {
  href: string;
  name: string;
  icon: React.ReactNode;
  className?: string;
  children?: { href: string; name: string }[];
  isOpen?: boolean;
  setOpenLink?: (href: string | null) => void;
  hasChild?: boolean;
  isActiveOverride?: boolean;
}

function ClientSideLink({
  href,
  name,
  icon,
  className,
  children,
  isOpen = false,
  setOpenLink,
  hasChild = false,
  isActiveOverride,
}: ClientSideLinkProps) {
  const pathname = usePathname();

  const isActive =
    isActiveOverride ?? (pathname === href || pathname?.startsWith(`${href}/`));

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        window.location.href = "/admin/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link
        href={href == "/admin/logout" ? "#" : href}
        onClick={() => {
          setOpenLink?.(isOpen ? null : href);
          if (href === "/admin/logout") {
            handleLogout();
            return;
          }
        }}
        className={cn(
          "group relative flex items-center px-4 py-2.5 rounded-lg font-itc-medium justify-between",
          "transition-all duration-200 ease-out hover:translate-x-0.5",
          isActive ? "hover:text-white" : "hover:text-primary btn-fill-center",
          isActive
            ? "bg-primary text-white shadow-sm shadow-primary/30"
            : "text-gray-600 hover:bg-gray-50",
          className,
        )}
        style={{ "--fill-color": "#0A0A0A" } as React.CSSProperties}
      >
        {/* Left accent bar — grows on hover for non-active items */}
        {!isActive && (
          <span className="pointer-events-none absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out group-hover:h-5" />
        )}
        <div className="flex items-center">
          <span className="mr-3 transition-transform duration-200 ease-out group-hover:scale-110 group-active:scale-95">
            {icon}
          </span>
          {name}
        </div>
        {hasChild && (
          <MdExpandCircleDown
            className={cn(
              "ml-1 mt-1 transition-transform duration-300 ease-out group-hover:scale-110",
              isOpen && "rotate-180",
            )}
          />
        )}
      </Link>
      {hasChild && children && (
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="flex pl-14 flex-col items-start gap-1 pt-1">
              {children.map((item, index) => {
                const isChildActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    aria-hidden={!isOpen}
                    tabIndex={isOpen ? 0 : -1}
                    style={{ transitionDelay: isOpen ? `${index * 50 + 80}ms` : "0ms" }}
                    className={cn(
                      "group/child flex w-full items-center gap-2 rounded-[5px] font-itc-medium cursor-pointer text-[15px] px-2 py-2.5",
                      "transition-all duration-300 ease-out",
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
                      isChildActive
                        ? "text-primary"
                        : "text-description-color/70 hover:text-primary hover:bg-gray-50",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ease-out",
                        isChildActive
                          ? "bg-primary scale-110"
                          : "bg-description-color/50 group-hover/child:bg-primary group-hover/child:scale-125",
                      )}
                    />
                    <span className="text-trim transition-transform duration-200 ease-out group-hover/child:translate-x-0.5">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(ClientSideLink);
