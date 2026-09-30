import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

type P = SVGProps<SVGSVGElement> & { size?: number };
const mk = (children: React.ReactNode) =>
  function Icon({ size = 20, ...rest }: P) {
    return (
      <svg {...base} width={size} height={size} {...rest}>
        {children}
      </svg>
    );
  };

export const UploadIcon = mk(
  <>
    <path d="M12 16V4M7 9l5-5 5 5" />
    <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
  </>,
);
export const DownloadIcon = mk(
  <>
    <path d="M12 4v11M7 11l5 5 5-5" />
    <path d="M5 20h14" />
  </>,
);
export const LockIcon = mk(
  <>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </>,
);
export const LogoIcon = mk(
  <>
    <path d="M7 3h7l4 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M14 3v4h4" />
    <path d="M9 13h6M12 10v6" />
  </>,
);
export const GlobeIcon = mk(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.5 4 5.6 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.6-4-9s1.4-6.5 4-9z" />
  </>,
);
export const ChevronDown = mk(<path d="M6 9l6 6 6-6" />);
export const MoonIcon = mk(<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />);
export const SunIcon = mk(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </>,
);
export const ChevronLeft = mk(<path d="M15 5l-7 7 7 7" />);
export const ChevronRight = mk(<path d="M9 5l7 7-7 7" />);
export const CloseIcon = mk(<path d="M6 6l12 12M18 6L6 18" />);
export const CheckIcon = mk(<path d="M5 12.5l4.5 4.5L19 7.5" strokeWidth={3} />);
export const SpinnerIcon = ({ size = 20, className = "" }: P) => (
  <svg
    {...base}
    width={size}
    height={size}
    strokeWidth={2.5}
    className={`animate-spin ${className}`}
  >
    <path d="M12 3a9 9 0 1 0 9 9" />
  </svg>
);
export const GripIcon = ({ size = 22 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    {[6, 12, 18].flatMap((y) =>
      [9, 15].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} />),
    )}
  </svg>
);
