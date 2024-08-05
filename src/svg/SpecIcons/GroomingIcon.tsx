interface GroomingIconProps {
  width: number;
  color: "primary" | "white";
}

export default function GroomingIcon({
  width = 24,
  color = "primary",
}: GroomingIconProps): JSX.Element {
  const stroke = color === "primary" ? "#A461D8" : "#FFFFFF";
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.59998 5.59998L17 16M6.59998 12.4L17 2M7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4ZM7 14C7 15.6569 5.65685 17 4 17C2.34315 17 1 15.6569 1 14C1 12.3431 2.34315 11 4 11C5.65685 11 7 12.3431 7 14Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
