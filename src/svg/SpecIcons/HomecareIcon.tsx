interface HomecareIconProps {
  width: number;
  color: "primary" | "white";
}

export default function HomecareIcon({
  width = 24,
  color = "primary",
}: HomecareIconProps): JSX.Element {
  const stroke = color === "primary" ? "#FF974A" : "#FFFFFF";
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 12.0002H0.75L12 0.750183L23.25 12.0002H20.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25 12.0002V20.7502C3.25 21.4132 3.51339 22.0491 3.98223 22.5179C4.45107 22.9868 5.08696 23.2502 5.75 23.2502H18.25C18.913 23.2502 19.5489 22.9868 20.0178 22.5179C20.4866 22.0491 20.75 21.4132 20.75 20.7502V12.0002"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 12.0002H9.5V17.0002H14.5V12.0002Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
