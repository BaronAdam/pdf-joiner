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
