import { cn } from "@/lib/utils";

export function RubyIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect x="4" y="4" width="152" height="218" rx="8" fill="#F9FAFB"/>
      <rect x="8" y="8" width="144" height="210" rx="4" fill="white" stroke="#F3F4F6" strokeWidth="2"/>

      <rect x="20" y="20" width="40" height="40" rx="4" fill="#E5E7EB" />
      <rect x="72" y="24" width="72" height="10" rx="5" fill="#4B5563" />
      <rect x="72" y="42" width="52" height="8" rx="4" fill="#9CA3AF" />

      <rect x="20" y="72" width="120" height="4" rx="2" fill="hsl(var(--primary))" />
      
      <g opacity="0.8">
        <rect x="20" y="88" width="60" height="8" rx="4" fill="hsl(var(--primary))" />
        <rect x="20" y="102" width="120" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="20" y="111" width="110" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

      <g opacity="0.8">
        <rect x="20" y="132" width="80" height="8" rx="4" fill="hsl(var(--primary))" />
        <rect x="20" y="146" width="80" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="20" y="155" width="70" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="20" y="164" width="75" height="5" rx="2.5" fill="#E5E7EB" />
      </g>
      <g opacity="0.8">
        <rect x="112" y="132" width="28" height="8" rx="4" fill="hsl(var(--primary))" />
        <rect x="112" y="146" width="28" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="112" y="155" width="28" height="5" rx="2.5" fill="#D1D5DB" />
      </g>
    </svg>
  );
}
