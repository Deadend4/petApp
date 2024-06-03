interface OnlineCircleProps {
  width: number;
}
export default function OnlineCircle({
  width = 30,
}: OnlineCircleProps): JSX.Element {
  return (
    <svg width={width} height={width} viewBox="0 0 20 20" fill="none">
      <g filter="url(#filter0_d_1297_31604)">
        <circle cx="9.96552" cy="9.96552" r="6.96552" fill="#3DD598" />
        <circle
          cx="9.96552"
          cy="9.96552"
          r="6.61724"
          stroke="white"
          strokeWidth="0.696552"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1297_31604"
          x="0.213793"
          y="0.910345"
          width="19.5041"
          height="19.5034"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.696552" />
          <feGaussianBlur stdDeviation="1.3931" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.239216 0 0 0 0 0.835294 0 0 0 0 0.596078 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1297_31604"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1297_31604"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
