import { cn } from "@/lib/utils";

export function AmethystIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 226"
      fill="none"
      className={cn("", className)}
      {...props}
    >
      <rect width="160" height="226" rx="8" fill="white" />
      <rect x="20" y="20" width="36" height="36" rx="18" fill="#E5E7EB" />
      <rect x="66" y="24" width="74" height="10" rx="5" fill="#4B5563" />
      <rect x="66" y="42" width="50" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.7" />
      <g opacity="0.8">
        <rect x="100" y="80" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="100" y="94" width="50" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="100" y="103" width="55" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="100" y="112" width="48" height="5" rx="2.5" fill="#E5E7EB" />

        <rect x="100" y="132" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="100" y="146" width="50" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="100" y="155" width="55" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="100" y="164" width="48" height="5" rx="2.5" fill="#E5E7EB" />

        <rect x="100" y="184" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="100" y="198" width="50" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="100" y="207" width="45" height="5" rx="2.5" fill="#E5E7EB" />
      </g>
      <g opacity="0.8">
        <rect x="20" y="80" width="30" height="8" rx="4" fill="#9CA3AF" />
        <rect x="20" y="94" width="50" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="20" y="103" width="55" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="20" y="112" width="48" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="20" y="121" width="38" height="5" rx="2.5" fill="#E5E7EB" />

        <rect x="20" y="146" width="30" height="8" rx="4" fill="#9CA3AF" />
        <rect x="20" y="160" width="40" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="20" y="169" width="35" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="20" y="178" width="42" height="5" rx="2.5" fill="#D1D5DB" />
      </g>
    </svg>
  );
}
