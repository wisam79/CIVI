import { cn } from "@/lib/utils";

export function GarnetIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect width="160" height="226" rx="8" fill="white" />
      <rect x="16" y="16" width="36" height="36" rx="18" fill="#E5E7EB" />
      <rect x="62" y="20" width="68" height="10" rx="5" fill="#4B5563" />
      <rect x="62" y="38" width="48" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.7"/>

      <g opacity="0.7">
        <rect x="110" y="58" width="34" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="118" y="67" width="26" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="98" y="76" width="46" height="5" rx="2.5" fill="#D1D5DB" />
      </g>
      
      <rect x="16" y="60" width="128" height="4" rx="2" fill="hsl(var(--primary))" />

      <g opacity="0.8">
        <rect x="16" y="80" width="128" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="94" width="128" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="16" y="103" width="118" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="16" y="112" width="123" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

      <g opacity="0.8">
        <rect x="16" y="136" width="80" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="150" width="80" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="16" y="159" width="80" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="16" y="168" width="70" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

      <g opacity="0.8">
        <rect x="112" y="136" width="32" height="8" rx="4" fill="#9CA3AF" />
        <rect x="112" y="150" width="32" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="112" y="159" width="32" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="112" y="168" width="32" height="5" rx="2.5" fill="#D1D5DB" />
      </g>

      <rect x="16" y="192" y2="192" width="128" height="2" rx="1" fill="#E5E7EB" />

    </svg>
  );
}
