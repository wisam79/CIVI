import { cn } from "@/lib/utils";

export function EmeraldIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
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
      <rect x="42" y="62" width="76" height="10" rx="5" fill="#4B5563" />
      <rect x="52" y="80" width="56" height="8" rx="4" fill="#9CA3AF" />
      <rect x="20" y="100" width="120" height="4" rx="2" fill="hsl(var(--primary))" />

      <g opacity="0.8">
        <rect x="28" y="114" width="104" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="42" y="123" width="76" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="36" y="132" width="88" height="5" rx="2.5" fill="#D1D5DB" />
      </g>

      <g opacity="0.8">
        <rect x="60" y="152" width="40" height="8" rx="4" fill="#9CA3AF" />
        <rect x="40" y="164" width="80" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="32" y="173" width="96" height="5" rx="2.5" fill="#E5E7EB" />
        <rect x="50" y="182" width="60" height="5" rx="2.5" fill="#E5E7EB" />
      </g>

      <rect x="20" y="200" width="55" height="8" rx="4" fill="#9CA3AF" />
      <rect x="85" y="200" width="55" height="8" rx="4" fill="#9CA3AF" />
    </svg>
  );
}
