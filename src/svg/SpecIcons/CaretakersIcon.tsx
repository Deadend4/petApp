interface CaretakersIconProps {
  width: number;
  color: "primary" | "white";
}

export default function CaretakersIcon({
  width = 24,
  color = "primary",
}: CaretakersIconProps): JSX.Element {
  const stroke = color === "primary" ? "#FC5A5A" : "#FFFFFF";
  const height = width * 0.88;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2506 19.75L13.0006 21L3.62562 11.715C3.00725 11.1133 2.52017 10.39 2.19506 9.5908C1.86994 8.79158 1.71382 7.9337 1.73654 7.07117C1.75926 6.20865 1.96032 5.36018 2.32707 4.57918C2.69381 3.79818 3.21829 3.10158 3.86748 2.53323C4.51667 1.96489 5.2765 1.53712 6.09913 1.27686C6.92177 1.0166 7.78938 0.929487 8.64733 1.02101C9.50528 1.11253 10.335 1.3807 11.0842 1.80864C11.8334 2.23658 12.4859 2.81501 13.0006 3.50751C13.9945 2.18093 15.4747 1.30351 17.1155 1.06826C18.7563 0.833023 20.4234 1.25923 21.75 2.25313C23.0766 3.24703 23.954 4.7272 24.1892 6.36803C24.4245 8.00886 23.9983 9.67593 23.0044 11.0025M15.5006 16H23.0006M19.2506 12.25V19.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
