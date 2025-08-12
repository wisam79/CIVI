import { cn } from "@/lib/utils";

export function OnyxIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
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
      <rect x="37" y="62" width="86" height="10" rx="5" fill="#4B5563" />
      <rect x="52" y="80" width="56" height="8" rx="4" fill="#9CA3AF" />
      <rect x="20" y="100" width="120" height="2" rx="1" fill="#E5E7EB" />
      <rect x="20" y="110" width="120" height="8" rx="4" fill="#9CA3AF" />
      <rect x="20" y="122" width="120" height="2" rx="1" fill="hsl(var(--primary))" />
      <g opacity="0.8">
        <rect x="20" y="130" width="120" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="20" y="139" width="100" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="20" y="148" width="110" height="5" rx="2.5" fill="#D1D5DB" />
      </g>
      <rect x="20" y="168" width="70" height="8" rx="4" fill="#9CA3AF" />
      <rect x="20" y="180" width="70" height="2" rx="1" fill="hsl(var(--primary))" />
      <rect x="106" y="168" width="34" height="8" rx="4" fill="#9CA3AF" />
      <rect x="106" y="180" width="34" height="2" rx="1" fill="hsl(var(--primary))" />
      <g opacity="0.7">
        <rect x="20" y="188" width="70" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="20" y="197" width="60" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="20" y="206" width="65" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="106" y="188" width="34" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="106" y="197" width="28" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="106" y="206" width="32" height="5" rx="2.5" fill="#D1D5DB" />
      </g>
    </svg>
  );
}
