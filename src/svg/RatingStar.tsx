interface RatingStarProps {
  width: number;
}

export default function RatingStar({ width }: RatingStarProps): JSX.Element {
  return (
    <svg width={width} height={width} viewBox="0 0 16 15" fill="none">
      <path
        d="M7.99989 11.8334L3.88522 13.9967L4.67122 9.41469L1.33789 6.17002L5.93789 5.50335L7.99522 1.33469L10.0526 5.50335L14.6526 6.17002L11.3192 9.41469L12.1052 13.9967L7.99989 11.8334Z"
        fill="#FFC542"
        stroke="#FFC542"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
