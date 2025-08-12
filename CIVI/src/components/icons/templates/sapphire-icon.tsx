import { cn } from "@/lib/utils";

export function SapphireIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect width="160" height="226" rx="8" fill="white" />
      <path d="M8 0H152C156.418 0 160 3.58172 160 8V80H0V8C0 3.58172 3.58172 0 8 0Z" fill="hsl(var(--primary))"/>
      <rect x="20" y="22" width="36" height="36" rx="18" fill="white" fillOpacity="0.8"/>
      <rect x="70" y="26" width="70" height="10" rx="5" fill="white" />
      <rect x="70" y="44" width="50" height="8" rx="4" fill="white" fillOpacity="0.7" />

      <line x1="80" y1="92" x2="80" y2="218" stroke="#F3F4F6" strokeWidth="2"/>

      <g opacity="0.8">
        <rect x="92" y="98" width="52" height="8" rx="4" fill="#9CA3AF" />
        <rect x="92" y="112" width="58" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="92" y="121" width="48" height="5" rx="2.5" fill="#E5E7EB" />

        <rect x="92" y="142" width="42" height="8" rx="4" fill="#9CA3AF" />
        <rect x="92" y="156" width="58" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="92" y="165" width="52" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="92" y="174" width="46" height="5" rx="2.5" fill="#E5E7EB" />
      </g>
      
      <g opacity="0.8">
        <rect x="16" y="98" width="48" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="112" width="54" height="5" rx="2.5" fill="#D1D5DB" />

        <rect x="16" y="132" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="146" width="34" height="5" rx="2.5" fill="#D1D5DB" />
        
        <rect x="16" y="166" width="32" height="8" rx="4" fill="#9CA3AF" />
        <rect x="16" y="180" width="44" height="5" rx="2.5" fill="#D1D5DB" />
      </g>
    </svg>
  );
}
