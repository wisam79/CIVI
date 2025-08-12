import { cn } from "@/lib/utils";

export function JadeIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect width="160" height="226" rx="8" fill="white" />
      <rect x="16" y="16" width="40" height="40" rx="4" fill="#E5E7EB" />
      <rect x="68" y="20" width="76" height="10" rx="5" fill="#4B5563" />
      <rect x="68" y="38" width="56" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.7"/>

      <rect x="16" y="68" width="128" height="4" rx="2" fill="hsl(var(--primary))" />

      <g opacity="0.8">
        <rect x="16" y="88" width="50" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="102" width="128" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="16" y="111" width="118" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="16" y="120" width="123" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

      <g opacity="0.8">
        <rect x="16" y="144" width="60" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="158" width="60" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="16" y="167" width="50" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="16" y="176" width="55" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

      <g opacity="0.8">
        <rect x="92" y="144" width="52" height="8" rx="4" fill="#9CA3AF" />
        <rect x="92" y="158" width="52" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="92" y="167" width="42" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

       <g opacity="0.8">
        <rect x="92" y="190" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="92" y="204" width="20" height="6" rx="3" fill="#D1D5DB" />
        <rect x="116" y="204" width="20" height="6" rx="3" fill="#D1D5DB" />
      </g>
    </svg>
  );
}
