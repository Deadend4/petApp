import React from "react";

interface ExitIconProps {
  width: number;
  height: number;
}
export default function ExitIcon({
  width = 18,
  height = 16,
}: ExitIconProps): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill="none">
      <path
        d="M10.6667 4.66668V3.00001C10.6667 2.55798 10.4911 2.13406 10.1785 1.8215C9.86595 1.50894 9.44203 1.33334 9 1.33334H3.16667C2.72464 1.33334 2.30072 1.50894 1.98816 1.8215C1.67559 2.13406 1.5 2.55798 1.5 3.00001V13C1.5 13.442 1.67559 13.866 1.98816 14.1785C2.30072 14.4911 2.72464 14.6667 3.16667 14.6667H9C9.44203 14.6667 9.86595 14.4911 10.1785 14.1785C10.4911 13.866 10.6667 13.442 10.6667 13V11.3333M4.83333 8.00001H16.5M16.5 8.00001L14 5.50001M16.5 8.00001L14 10.5"
        stroke="#F7FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
