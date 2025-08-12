import { cn } from "@/lib/utils";

export function QuartzIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect width="160" height="226" rx="8" fill="white" />
      <rect x="62" y="16" width="36" height="36" rx="18" fill="#E5E7EB" />
      <rect x="27" y="62" width="106" height="10" rx="5" fill="hsl(var(--primary))" />
      <rect x="52" y="80" width="56" height="8" rx="4" fill="#9CA3AF" />
      <rect x="20" y="100" width="120" height="4" rx="2" fill="hsl(var(--primary))" />
      <line x1="80" y1="112" x2="80" y2="218" stroke="#F3F4F6" strokeWidth="2"/>
      
      <g opacity="0.8">
        <rect x="92" y="118" width="52" height="8" rx="4" fill="#9CA3AF" />
        <rect x="92" y="132" width="58" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="92" y="141" width="48" height="5" rx="2.5" fill="#E5E7EB" />

        <rect x="92" y="162" width="42" height="8" rx="4" fill="#9CA3AF" />
        <rect x="92" y="176" width="58" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="92" y="185" width="52" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="92" y="194" width="46" height="5" rx="2.5" fill="#E5E7EB" />
      </g>
      
      <g opacity="0.8">
        <rect x="16" y="118" width="48" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="132" width="54" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="16" y="141" width="46" height="5" rx="2.5" fill="#D1D5DB" />

        <rect x="16" y="162" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="176" width="34" height="5" rx="2.5" fill="#D1D5DB" />

        <rect x="16" y="196" width="32" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="210" width="24" height="6" rx="3" fill="#D1D5DB" />
        <rect x="44" y="210" width="24" height="6" rx="3" fill="#D1D5DB" />
      </g>
    </svg>
  );
}
