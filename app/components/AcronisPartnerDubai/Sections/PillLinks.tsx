import Link from "next/link";

export interface PillLinkItem {
  text: string;
  href: string;
}

export default function PillLinks({ links }: { links: PillLinkItem[] }) {
  if (!links?.length) return null;
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className="rounded-full border border-[#E5E5E5] px-4 py-2 text-primary text-[14px] leading-[1.4] transition-colors hover:bg-bgF5F9FC"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
