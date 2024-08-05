interface PillIconProps {
  width: number;
  color: "primary" | "white";
}

export default function PillIcon({
  width = 24,
  color = "primary",
}: PillIconProps): JSX.Element {
  const stroke = color === "primary" ? "#FF9AD5" : "#FFFFFF";
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.50055 6.5L13.5005 13.5M2.50053 10.5L10.5005 2.49998C11.4288 1.57172 12.6878 1.05023 14.0005 1.05023C15.3133 1.05023 16.5723 1.57172 17.5005 2.49998C18.4288 3.42824 18.9503 4.68722 18.9503 5.99998C18.9503 7.31273 18.4288 8.57172 17.5005 9.49998L9.50053 17.5C8.57227 18.4282 7.31328 18.9497 6.00053 18.9497C4.68777 18.9497 3.42879 18.4282 2.50053 17.5C1.57227 16.5717 1.05078 15.3127 1.05078 14C1.05078 12.6872 1.57227 11.4282 2.50053 10.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
