import Image from "next/image";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export default function LucideIcon({ name, className, strokeWidth = 1 }: LucideIconProps) {
  // if it's a path (starts with / or https), render as image
  if (name.startsWith("/") || name.startsWith("http")) {
    return (
      <Image
        src={name}
        alt=""
        width={32}
        height={32}
        className={className}
      />
    );
  }

  // otherwise treat as Lucide icon name
  const Icon = (Icons as unknown as Record<string, React.FC<{ className?: string; strokeWidth?: number }>>)[name];
  if (!Icon) return null;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}