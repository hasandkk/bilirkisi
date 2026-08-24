import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function VehicleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20v-3.2l2.4-5.4A2 2 0 0 1 8.2 10h11.6a2 2 0 0 1 1.8 1.4L24 16.8V20" />
      <path d="M4 20h24" opacity=".45" />
      <circle cx="9" cy="21.5" r="2.5" />
      <circle cx="23" cy="21.5" r="2.5" />
      <path d="M6.6 16.4h14.8" />
      <path d="M26 12.5h3M26 16h4" opacity=".55" />
    </svg>
  );
}

export function FireIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 4c1.6 3.4 1 5.6-.7 7.5-1.9 2.1-4.3 3.7-4.3 7.1A5 5 0 0 0 16 24a5 5 0 0 0 5-5.4c-.2-2-1.2-3.3-2.2-4.6" />
      <path d="M16 24a2.6 2.6 0 0 1-2.6-2.7c0-1.6 1.3-2.4 2.1-3.6.9 1.1 3 2.2 3 3.7A2.5 2.5 0 0 1 16 24Z" opacity=".6" />
      <path d="M4 28h24" />
      <path d="M6 28v-4h4v4M22 28v-6h4v6" opacity=".5" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 28V8l10-4 10 4v20" />
      <path d="M3 28h26" />
      <path d="M11 13h4M17 13h4M11 18h4M17 18h4" />
      <path d="M13.5 28v-5h5v5" />
    </svg>
  );
}

export function EstateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14 16 5l12 9" />
      <path d="M7 12.5V27h18V12.5" />
      <path d="M3 27h26" />
      <path d="M12 27v-7h8v7" />
      <path d="M20 9V6h3v5" opacity=".5" />
    </svg>
  );
}

export function SafetyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 16v-1a8 8 0 0 1 16 0v1" />
      <path d="M6 16h20a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z" />
      <path d="M13 8.2V5.6M19 8.2V5.6" opacity=".55" />
      <path d="M9 23h14M11 27h10" opacity=".5" />
    </svg>
  );
}

export function DigitalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="6" width="24" height="16" rx="1.5" />
      <path d="M11 27h10M16 22v5" />
      <path d="M8.5 11h6M8.5 14h9M8.5 17h4" />
      <path d="M21 10.5l2.5 2.5L21 15.5" opacity=".65" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h10l6 6v20H8z" />
      <path d="M18 3v6h6" />
      <path d="M12 14h8M12 17.5h8" opacity=".55" />
      <path d="M12 23c1.6-2.4 2.6-2.4 3.6 0s2.1 2.6 4.4-1.4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3.5 27 7v9.4c0 6-4.4 10.4-11 12.1-6.6-1.7-11-6.1-11-12.1V7Z" />
      <path d="m11.5 16 3.2 3.2 6-6.4" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9.5" width="24" height="16" rx="1.5" />
      <path d="M12 9.5V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.5" />
      <path d="M4 16h24" opacity=".55" />
      <path d="M14 16v2.5h4V16" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M6 16h20M19 9l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="m6 16.5 6.5 6.5L26 9.5" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M16 7v18M7 16h18" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11.4 5.5 14 10.6l-2.5 2.3a15.6 15.6 0 0 0 7.6 7.6l2.3-2.5 5.1 2.6-.7 3.6a2.4 2.4 0 0 1-2.6 1.9C13.6 25.3 6.7 18.4 5.9 8.8A2.4 2.4 0 0 1 7.8 6.2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="7" width="25" height="18" rx="1.5" />
      <path d="m4 9 12 8.5L28 9" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 28s9-8.2 9-14.5A9 9 0 0 0 7 13.5C7 19.8 16 28 16 28Z" />
      <circle cx="16" cy="13.2" r="3.4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8.5V16l5 3" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m16 4 12 6-12 6L4 10Z" />
      <path d="m4 16 12 6 12-6" opacity=".65" />
      <path d="m4 22 12 6 12-6" opacity=".4" />
    </svg>
  );
}

export const areaIcons = {
  vehicle: VehicleIcon,
  fire: FireIcon,
  building: BuildingIcon,
  estate: EstateIcon,
  safety: SafetyIcon,
  digital: DigitalIcon,
  document: DocumentIcon,
  shield: ShieldIcon,
  briefcase: BriefcaseIcon,
} as const;

export type AreaIconName = keyof typeof areaIcons;
