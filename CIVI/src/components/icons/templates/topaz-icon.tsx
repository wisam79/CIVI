import { cn } from "@/lib/utils";

export function TopazIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect width="160" height="226" rx="8" fill="white" />
      <path d="M56 0H8C3.58172 0 0 3.58172 0 8V218C0 222.418 3.58172 226 8 226H56V0Z" fill="hsl(var(--primary))"/>
      
      <rect x="10" y="18" width="36" height="36" rx="18" fill="white" fillOpacity="0.8"/>
      <rect x="8" y="64" width="40" height="8" rx="4" fill="white" />
      <rect x="12" y="80" width="32" height="6" rx="3" fill="white" fillOpacity="0.7"/>

      <g opacity="0.7">
        <rect x="8" y="100" width="40" height="5" rx="2.5" fill="white" />
        <rect x="8" y="109" width="30" height="5" rx="2.5" fill="white" />
        <rect x="8" y="118" width="35" height="5" rx="2.5" fill="white" />
      </g>

      <g opacity="0.8">
        <rect x="72" y="24" width="68" height="8" rx="4" fill="#9CA3AF" />
        <rect x="72" y="38" width="78" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="72" y="47" width="62" height="5" rx="2.5" fill="#D1D5DB" />

        <rect x="72" y="72" width="68" height="8" rx="4" fill="#9CA3AF" />
        <rect x="72" y="86" width="78" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="72" y="95" width="72" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="72" y="104" width="66" height="5" rx="2.5" fill="#E5E7EB" />

        <rect x="72" y="128" width="68" height="8" rx="4" fill="#9CA3AF" />
        <rect x="72" y="142" width="78" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="72" y="151" width="72" height="5" rx="2.5" fill="#E5E7EB" />
      </g>
    </svg>
  );
}
