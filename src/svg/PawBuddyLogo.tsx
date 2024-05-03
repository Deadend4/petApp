import React from "react";

interface PawBuddyLogoProps {
  width: number;
  height: number;
}
export default function PawBuddyLogo({
  width,
  height,
}: PawBuddyLogoProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 174 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9921 19.4898C13.9813 20.9001 13.7122 22.1488 13.1847 23.236C12.668 24.3125 11.9898 25.2168 11.1501 25.9488C10.3212 26.6808 9.39546 27.2352 8.3728 27.612C7.35013 27.9888 6.33284 28.1771 5.32094 28.1771H4.99799C4.99799 28.6293 4.99799 29.1675 4.99799 29.7919C5.00876 30.4055 5.0249 31.0783 5.04643 31.8103C5.06796 32.5316 5.09487 33.2905 5.12717 34.0871C5.17023 34.8729 5.22405 35.6588 5.28864 36.4446C4.65351 36.38 4.07221 36.337 3.54473 36.3154C3.01724 36.2939 2.55435 36.2831 2.15605 36.2831C1.94075 36.2831 1.75236 36.2831 1.59089 36.2831C1.42942 36.2939 1.29485 36.2993 1.18721 36.2993C1.05803 36.31 0.950377 36.3154 0.864258 36.3154C0.918082 35.4758 0.966525 34.6361 1.00958 33.7964C1.05264 32.946 1.09032 32.1171 1.12262 31.3097C1.15491 30.4916 1.17644 29.7058 1.18721 28.9522C1.20874 28.1987 1.23027 27.4882 1.2518 26.8208C1.28409 25.2706 1.30562 23.7851 1.31638 22.3641C1.31638 20.9969 1.30562 19.689 1.28409 18.4403C1.27333 17.9128 1.26256 17.3692 1.2518 16.8094C1.24103 16.2496 1.22488 15.706 1.20335 15.1785C1.19259 14.651 1.17644 14.1612 1.15491 13.7091C1.14415 13.2462 1.12262 12.8479 1.09032 12.5142C1.91922 12.3635 2.72659 12.272 3.51243 12.2397C4.30904 12.1966 4.9657 12.1751 5.48241 12.1751C5.88071 12.1751 6.37052 12.1912 6.95183 12.2235C7.53313 12.2558 8.13597 12.3473 8.76033 12.498C9.39546 12.638 10.0252 12.864 10.6496 13.1762C11.2739 13.4776 11.8337 13.8975 12.3289 14.4357C12.8241 14.974 13.2224 15.6575 13.5238 16.4864C13.836 17.3046 13.9921 18.3057 13.9921 19.4898ZM9.82606 19.619C9.82606 18.8009 9.73456 18.1012 9.55155 17.5199C9.36855 16.9278 9.08866 16.4434 8.71189 16.0666C8.34588 15.6898 7.87223 15.4046 7.29092 15.2108C6.72038 15.017 6.04219 14.8986 5.25635 14.8555C5.21329 15.8029 5.17561 16.7986 5.14332 17.8428C5.12179 18.887 5.10026 19.9043 5.07873 20.8947C5.0572 21.8743 5.04105 22.7893 5.03028 23.6397C5.01952 24.4794 5.00876 25.1683 4.99799 25.7066C5.80536 25.6635 6.51046 25.4859 7.1133 25.1737C7.71614 24.8615 8.2167 24.4417 8.61501 23.9142C9.02407 23.3868 9.32549 22.7624 9.51926 22.0411C9.72379 21.3091 9.82606 20.5018 9.82606 19.619Z"
        fill="white"
      />
      <path
        d="M70.4721 12.9839C70.569 14.2649 70.6551 15.6105 70.7305 17.0207C70.7627 17.6236 70.795 18.2695 70.8273 18.9584C70.8596 19.6474 70.8865 20.3686 70.9081 21.1222C70.9296 21.865 70.9458 22.6293 70.9565 23.4151C70.978 24.1902 70.9888 24.9653 70.9888 25.7403C70.9888 27.2582 70.8919 28.7007 70.6982 30.0678C70.5044 31.435 70.1868 32.6406 69.7455 33.6848C69.3041 34.729 68.7228 35.5579 68.0015 36.1715C67.2803 36.7851 66.3922 37.0919 65.3372 37.0919C65.3157 37.0919 65.2188 37.0866 65.0466 37.0758C64.8851 37.065 64.6752 37.0274 64.4168 36.9628C64.1585 36.8982 63.8678 36.7959 63.5449 36.656C63.2327 36.516 62.9151 36.3169 62.5922 36.0585C62.2692 35.8002 61.9624 35.4718 61.6718 35.0735C61.3811 34.6645 61.1389 34.1693 60.9451 33.588C60.7191 34.137 60.4499 34.5945 60.1378 34.9605C59.8256 35.3265 59.5026 35.6333 59.1689 35.8809C58.8352 36.1177 58.4961 36.3007 58.1516 36.4299C57.8179 36.5591 57.5165 36.6506 57.2474 36.7044C56.9783 36.7582 56.7522 36.7905 56.5692 36.8013C56.3862 36.8121 56.2785 36.8174 56.2462 36.8174C55.6003 36.8174 55.046 36.6667 54.5831 36.3653C54.1309 36.0747 53.7434 35.671 53.4204 35.1543C53.1083 34.6268 52.8607 34.0132 52.6777 33.3135C52.4947 32.603 52.3493 31.8387 52.2417 31.0205C52.1448 30.1916 52.0802 29.325 52.0479 28.4208C52.0264 27.5165 52.0156 26.6123 52.0156 25.708C52.0156 24.8899 52.021 24.0771 52.0318 23.2698C52.0425 22.4516 52.0533 21.6604 52.0641 20.8961C52.0856 20.1318 52.1071 19.3998 52.1287 18.7001C52.161 17.9896 52.1879 17.3329 52.2094 16.7301C52.2632 15.3091 52.3278 13.9689 52.4032 12.7094L57.1343 12.8386C56.9298 14.0873 56.7468 15.4006 56.5853 16.7785C56.5207 17.3706 56.4562 18.0057 56.3916 18.6839C56.327 19.3621 56.2678 20.0726 56.2139 20.8154C56.1709 21.5474 56.1332 22.3063 56.1009 23.0922C56.0686 23.8672 56.0525 24.6423 56.0525 25.4174C56.0525 26.0094 56.0525 26.6069 56.0525 27.2097C56.0632 27.8126 56.0794 28.3993 56.1009 28.9698C56.1332 29.5296 56.1763 30.0571 56.2301 30.5522C56.2839 31.0367 56.3593 31.4673 56.4562 31.844C56.5638 32.2101 56.693 32.5007 56.8437 32.716C57.0052 32.9205 57.2043 33.0228 57.4411 33.0228C57.6672 33.0228 57.8771 32.8829 58.0709 32.603C58.2754 32.3231 58.4531 31.9571 58.6038 31.5049C58.7652 31.0421 58.9052 30.5253 59.0236 29.9548C59.1528 29.3735 59.255 28.7922 59.3304 28.2109C59.4165 27.6188 59.4811 27.0483 59.5242 26.4993C59.5672 25.9502 59.5888 25.4766 59.5888 25.0783C59.5888 24.9491 59.5941 24.7822 59.6049 24.5777C59.6049 24.3947 59.6049 24.1633 59.6049 23.8834C59.6157 23.5927 59.621 23.2429 59.621 22.8338C59.621 22.0157 59.6103 20.9123 59.5888 19.5236C59.5672 18.1241 59.5349 16.3748 59.4919 14.2757L63.5933 14.4372C63.4964 16.1703 63.4157 17.6451 63.3511 18.8615C63.2865 20.078 63.2327 21.0953 63.1896 21.9134C63.1466 22.7208 63.1143 23.372 63.0927 23.8672C63.082 24.3517 63.0712 24.7392 63.0604 25.0298C63.0604 25.3097 63.0604 25.525 63.0604 25.6757C63.0604 25.8157 63.0604 25.9502 63.0604 26.0794C63.0604 26.5423 63.0766 27.0429 63.1089 27.5811C63.1519 28.1086 63.2112 28.6361 63.2865 29.1636C63.3726 29.6911 63.4749 30.2024 63.5933 30.6976C63.7225 31.182 63.8624 31.6126 64.0131 31.9894C64.1746 32.3554 64.3522 32.6514 64.546 32.8775C64.7505 33.1035 64.9712 33.2166 65.208 33.2166C65.5741 33.2166 65.8647 33.012 66.08 32.603C66.3061 32.1939 66.4729 31.6395 66.5806 30.9398C66.699 30.2293 66.7743 29.4112 66.8066 28.4854C66.8389 27.5488 66.8551 26.5585 66.8551 25.5143C66.8551 23.8888 66.8174 22.3871 66.742 21.0091C66.6775 19.6312 66.5913 18.4094 66.4837 17.3437C66.376 16.2672 66.263 15.3522 66.1446 14.5986C66.0369 13.8343 65.9454 13.2584 65.8701 12.8709L70.4721 12.9839Z"
        fill="white"
      />
      <path
        d="M38.9361 5.3375C39.2829 3.10737 38.3283 1.13331 36.7967 0.925852C36.7097 0.913805 36.622 0.907848 36.5342 0.908024C35.0998 0.908024 33.7335 2.48014 33.4061 4.58224C33.0593 6.81238 34.0139 8.78644 35.5455 8.99389C35.633 9.00524 35.7206 9.01172 35.8081 9.01172C37.2424 9.01172 38.612 7.43312 38.9361 5.3375Z"
        fill="#1B85F3"
      />
      <path
        d="M27.8842 8.99389C27.7969 9.0052 27.7097 9.01168 27.6208 9.01172C26.1867 9.01112 24.8193 7.43272 24.4887 5.3375C24.1435 3.10737 25.0981 1.13331 26.6281 0.925851C26.7156 0.914506 26.8031 0.908023 26.8923 0.908023C28.3266 0.908023 29.6945 2.48014 30.0236 4.58224C30.3688 6.81238 29.4142 8.78644 27.8842 8.99389Z"
        fill="#1B85F3"
      />
      <path
        d="M44.3267 7.39098C44.5528 7.39067 44.7766 7.43587 44.9848 7.52388C46.3024 8.09438 46.6979 10.3067 45.8616 12.4704C45.1549 14.2921 43.8 15.4947 42.6023 15.4947C42.377 15.4947 42.1533 15.4509 41.9443 15.3618C40.6185 14.7913 40.2311 12.579 41.0723 10.4153C41.7741 8.60654 43.1112 7.41043 44.3024 7.39098H44.3267Z"
        fill="#1B85F3"
      />
      <path
        d="M22.3558 10.4153C23.1954 12.5757 22.8096 14.7913 21.4871 15.3618C21.2764 15.4509 21.0544 15.4947 20.8275 15.4947C19.6314 15.4947 18.278 14.2921 17.5714 12.4704C16.7319 10.3099 17.1176 8.09438 18.4401 7.52388C18.6508 7.43474 18.8729 7.39098 19.0998 7.39098C20.2959 7.39098 21.6492 8.59357 22.3558 10.4153Z"
        fill="#1B85F3"
      />
      <path
        d="M31.7649 13.6572C34.9143 13.6572 35.7673 14.9138 38.5191 19.89C39.6749 21.9725 41.4897 23.2638 43.1793 24.466C44.9343 25.7148 46.554 26.8674 47.1594 28.7105C47.4021 29.3712 47.5247 30.3983 47.5247 31.1089C47.5247 34.0432 45.556 36.0951 43.0219 36.0951C39.3614 36.0951 37.4352 33.7159 35.7696 31.6585C34.5007 30.0911 33.383 28.7105 31.7649 28.7105C30.1272 28.7105 28.951 30.1246 27.6279 31.7151C25.9275 33.7593 23.9845 36.0951 20.5078 36.0951C17.9738 36.0951 16.005 34.0408 16.005 31.1089C16 30.3983 16.1201 29.3712 16.3628 28.7105C16.9635 26.8878 18.4782 25.8961 20.1336 24.8124C21.7522 23.7526 23.5054 22.6048 24.6704 20.5058C27.4221 15.5395 28.6154 13.6572 31.7649 13.6572Z"
        fill="#1B85F3"
      />
      <path
        d="M38.9361 5.3375C39.2829 3.10737 38.3283 1.13331 36.7967 0.925852C36.7097 0.913805 36.622 0.907848 36.5342 0.908024C35.0998 0.908024 33.7335 2.48014 33.4061 4.58224C33.0593 6.81238 34.0139 8.78644 35.5455 8.99389C35.633 9.00524 35.7206 9.01172 35.8081 9.01172C37.2424 9.01172 38.612 7.43312 38.9361 5.3375Z"
        stroke="#1B85F3"
        strokeWidth="1.6027"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.8842 8.99389C27.7969 9.0052 27.7097 9.01168 27.6208 9.01172C26.1867 9.01112 24.8193 7.43272 24.4887 5.3375C24.1435 3.10737 25.0981 1.13331 26.6281 0.925851C26.7156 0.914506 26.8031 0.908023 26.8923 0.908023C28.3266 0.908023 29.6945 2.48014 30.0236 4.58224C30.3688 6.81238 29.4142 8.78644 27.8842 8.99389Z"
        stroke="#1B85F3"
        strokeWidth="1.6027"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.3267 7.39098C44.5528 7.39067 44.7766 7.43587 44.9848 7.52388C46.3024 8.09438 46.6979 10.3067 45.8616 12.4704C45.1549 14.2921 43.8 15.4947 42.6023 15.4947C42.377 15.4947 42.1533 15.4509 41.9443 15.3618C40.6185 14.7913 40.2311 12.579 41.0723 10.4153C41.7741 8.60654 43.1112 7.41043 44.3024 7.39098H44.3267Z"
        stroke="#1B85F3"
        strokeWidth="1.6027"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3558 10.4153C23.1954 12.5757 22.8096 14.7913 21.4871 15.3618C21.2764 15.4509 21.0544 15.4947 20.8275 15.4947C19.6314 15.4947 18.278 14.2921 17.5714 12.4704C16.7319 10.3099 17.1176 8.09438 18.4401 7.52388C18.6508 7.43474 18.8729 7.39098 19.0998 7.39098C20.2959 7.39098 21.6492 8.59357 22.3558 10.4153Z"
        stroke="#1B85F3"
        strokeWidth="1.6027"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.7649 13.6572C34.9143 13.6572 35.7673 14.9138 38.5191 19.89C39.6749 21.9725 41.4897 23.2638 43.1793 24.466C44.9343 25.7148 46.554 26.8674 47.1594 28.7105C47.4021 29.3712 47.5247 30.3983 47.5247 31.1089C47.5247 34.0432 45.556 36.0951 43.0219 36.0951C39.3614 36.0951 37.4352 33.7159 35.7696 31.6585C34.5007 30.0911 33.383 28.7105 31.7649 28.7105C30.1272 28.7105 28.951 30.1246 27.6279 31.7151C25.9275 33.7593 23.9845 36.0951 20.5078 36.0951C17.9738 36.0951 16.005 34.0408 16.005 31.1089C16 30.3983 16.1201 29.3712 16.3628 28.7105C16.9635 26.8878 18.4782 25.8961 20.1336 24.8124C21.7522 23.7526 23.5054 22.6048 24.6704 20.5058C27.4221 15.5395 28.6154 13.6572 31.7649 13.6572Z"
        stroke="#1B85F3"
        strokeWidth="1.6027"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100.843 29.5188C100.789 30.5738 100.601 31.4888 100.278 32.2639C99.9546 33.0282 99.5402 33.6848 99.0342 34.2338C98.539 34.7721 97.9739 35.2134 97.3388 35.5579C96.7144 35.8916 96.0793 36.1554 95.4334 36.3491C94.7982 36.5429 94.1685 36.6721 93.5441 36.7367C92.9305 36.812 92.3869 36.8497 91.9132 36.8497C90.9982 36.8497 90.137 36.8228 89.3297 36.769C88.533 36.7151 87.7526 36.6236 86.9883 36.4945C87.0529 35.8163 87.1067 35.0735 87.1498 34.2661C87.1928 33.448 87.2305 32.6191 87.2628 31.7794C87.2951 30.929 87.3166 30.0947 87.3274 29.2766C87.3381 28.4585 87.3489 27.7049 87.3597 27.016C87.3704 26.3162 87.3758 25.7134 87.3758 25.2074C87.3758 24.6907 87.3758 24.3193 87.3758 24.0933C87.3651 22.5539 87.3435 21.0683 87.3112 19.6366C87.3005 19.023 87.2843 18.3986 87.2628 17.7635C87.252 17.1176 87.2359 16.4932 87.2143 15.8904C87.2036 15.2768 87.1874 14.7009 87.1659 14.1626C87.1444 13.6136 87.1175 13.1292 87.0852 12.7094C87.3866 12.6663 87.7149 12.634 88.0702 12.6125C88.4362 12.5909 88.7968 12.5748 89.152 12.564C89.518 12.5425 89.8733 12.5317 90.2178 12.5317C90.573 12.521 90.896 12.5156 91.1866 12.5156C92.4892 12.5156 93.7164 12.6125 94.8682 12.8062C96.0308 13 97.0427 13.3337 97.9039 13.8074C98.7759 14.2703 99.4595 14.8893 99.9546 15.6643C100.461 16.4286 100.714 17.3867 100.714 18.5386C100.66 19.2383 100.488 19.895 100.197 20.5086C100.068 20.7777 99.9062 21.0522 99.7124 21.3321C99.5294 21.6012 99.298 21.8595 99.0181 22.1071C98.7382 22.3547 98.4099 22.5862 98.0331 22.8015C97.6563 23.0168 97.2257 23.1944 96.7413 23.3343C97.441 23.5173 98.0277 23.7919 98.5014 24.1579C98.975 24.5239 99.3626 24.9329 99.664 25.3851C99.9762 25.8264 100.208 26.2839 100.358 26.7576C100.52 27.2312 100.633 27.6672 100.697 28.0655C100.773 28.4638 100.816 28.7975 100.827 29.0667C100.837 29.3358 100.843 29.4865 100.843 29.5188ZM96.3053 29.6803C96.273 28.776 96.1223 27.9633 95.8532 27.242C95.7348 26.9406 95.5841 26.6446 95.4011 26.3539C95.2288 26.0525 95.0135 25.7887 94.7552 25.5627C94.4968 25.3259 94.19 25.1375 93.8348 24.9975C93.4795 24.8576 93.0705 24.7876 92.6076 24.7876C92.4892 24.7876 92.3654 24.793 92.2362 24.8038C92.107 24.8145 91.9671 24.8307 91.8164 24.8522L91.6872 33.9755C92.0101 34.0401 92.3277 34.0724 92.6399 34.0724C93.092 34.0724 93.4849 34.0132 93.8186 33.8947C94.1631 33.7656 94.4645 33.5987 94.7229 33.3942C94.9812 33.1789 95.1965 32.942 95.3688 32.6837C95.5518 32.4253 95.7025 32.1562 95.8209 31.8763C96.1008 31.2304 96.2623 30.4984 96.3053 29.6803ZM96.2407 18.4417C96.1977 17.8388 96.047 17.3006 95.7886 16.8269C95.681 16.6224 95.541 16.4233 95.3688 16.2295C95.2073 16.0357 95.0028 15.8635 94.7552 15.7128C94.5183 15.5621 94.2331 15.4383 93.8994 15.3414C93.5764 15.2445 93.1996 15.1961 92.769 15.1961C92.4246 15.1961 92.0424 15.2284 91.6226 15.2929L91.8164 22.1394H92.1716C92.839 22.1394 93.4042 22.0533 93.8671 21.8811C94.33 21.6981 94.7121 21.4774 95.0135 21.219C95.315 20.9499 95.5464 20.6593 95.7079 20.3471C95.8801 20.0349 96.0039 19.7442 96.0793 19.4751C96.1546 19.1952 96.1977 18.9638 96.2084 18.7808C96.23 18.587 96.2407 18.474 96.2407 18.4417Z"
        fill="white"
      />
      <path
        d="M118.448 25.2882C118.448 26.2032 118.415 27.129 118.351 28.0655C118.297 29.0021 118.184 29.9063 118.012 30.7783C117.85 31.6502 117.613 32.4738 117.301 33.2488C117 34.0132 116.607 34.6806 116.122 35.2511C115.638 35.8217 115.051 36.2684 114.362 36.5914C113.673 36.9251 112.855 37.0919 111.908 37.0919C111.004 37.0919 110.218 36.9466 109.55 36.6559C108.883 36.3761 108.312 35.9939 107.839 35.5095C107.365 35.0143 106.978 34.433 106.676 33.7656C106.386 33.0874 106.154 32.3661 105.982 31.6018C105.81 30.8267 105.691 30.0194 105.627 29.1797C105.562 28.34 105.53 27.5058 105.53 26.6769C105.53 26.4616 105.53 26.2732 105.53 26.1117C105.54 25.9502 105.551 25.778 105.562 25.595C105.573 25.4012 105.584 25.1751 105.594 24.9168C105.616 24.6477 105.637 24.3086 105.659 23.8995C105.68 23.4797 105.702 22.9683 105.723 22.3655C105.756 21.7519 105.788 21.0037 105.82 20.121C105.863 19.2383 105.901 18.1995 105.933 17.0046C105.976 15.7989 106.025 14.3995 106.079 12.8062L110.907 12.9839C110.745 14.6417 110.595 16.068 110.455 17.2629C110.315 18.4471 110.191 19.4913 110.083 20.3955C109.976 21.2998 109.879 22.0964 109.793 22.7853C109.707 23.4743 109.637 24.1417 109.583 24.7876C109.529 25.4335 109.486 26.0955 109.454 26.7737C109.432 27.4519 109.421 28.2324 109.421 29.1151C109.421 30.7621 109.599 32.0109 109.954 32.8613C110.309 33.7117 110.907 34.1369 111.746 34.1369C112.661 34.1369 113.361 33.5933 113.846 32.5061C114.341 31.408 114.588 29.6857 114.588 27.3389C114.588 24.7768 114.497 22.3063 114.314 19.9272C114.131 17.5374 113.889 15.1799 113.587 12.8547L118.157 12.7094C118.135 13.1292 118.125 13.5436 118.125 13.9527C118.125 14.351 118.125 14.7547 118.125 15.1638C118.125 16.2941 118.141 17.3921 118.173 18.4578C118.205 19.5128 118.243 20.487 118.286 21.3805C118.329 22.2632 118.367 23.0437 118.399 23.7219C118.431 24.4001 118.448 24.9222 118.448 25.2882Z"
        fill="white"
      />
      <path
        d="M137.474 24.8199C137.474 26.5746 137.307 28.0924 136.973 29.3735C136.65 30.6437 136.23 31.731 135.713 32.6352C135.197 33.5287 134.615 34.2554 133.97 34.8151C133.324 35.3749 132.678 35.8055 132.032 36.1069C131.386 36.4191 130.778 36.629 130.207 36.7367C129.637 36.8551 129.168 36.9143 128.802 36.9143C128.716 36.9143 128.522 36.9089 128.221 36.8982C127.93 36.8874 127.57 36.8605 127.139 36.8174C126.709 36.7851 126.219 36.7313 125.67 36.6559C125.132 36.5806 124.566 36.4729 123.974 36.333C123.985 34.2015 123.996 32.3554 124.007 30.7944C124.028 29.2228 124.044 27.8718 124.055 26.7414C124.066 25.6111 124.077 24.6638 124.087 23.8995C124.098 23.1352 124.103 22.4785 124.103 21.9295C124.114 21.3805 124.12 20.9122 124.12 20.5247C124.13 20.1264 124.136 19.7389 124.136 19.3621C124.136 18.77 124.13 18.1618 124.12 17.5374C124.109 16.9023 124.087 16.2887 124.055 15.6966C124.023 15.1046 123.98 14.5502 123.926 14.0334C123.872 13.5167 123.802 13.0754 123.716 12.7094C124.556 12.6555 125.32 12.6232 126.009 12.6125C126.709 12.5909 127.311 12.5802 127.817 12.5802C129.088 12.5802 130.207 12.7363 131.176 13.0485C132.145 13.3499 132.985 13.7751 133.695 14.3241C134.416 14.8623 135.014 15.5136 135.487 16.2779C135.972 17.0315 136.359 17.8604 136.65 18.7646C136.951 19.6689 137.161 20.6377 137.28 21.6712C137.409 22.6938 137.474 23.7434 137.474 24.8199ZM133.275 24.3193C133.275 22.4139 133.184 20.8638 133.001 19.6689C132.828 18.4632 132.543 17.5267 132.145 16.8592C131.757 16.1918 131.246 15.7397 130.611 15.5029C129.986 15.2553 129.228 15.1315 128.334 15.1315H127.85L128.043 34.1047C128.259 34.1908 128.458 34.25 128.641 34.2823C128.835 34.3038 129.023 34.3146 129.206 34.3146C129.927 34.3146 130.541 34.1477 131.047 33.814C131.564 33.4695 131.983 32.9097 132.306 32.1347C132.64 31.3488 132.882 30.3208 133.033 29.0505C133.194 27.7695 133.275 26.1924 133.275 24.3193Z"
        fill="white"
      />
      <path
        d="M156.112 24.8199C156.112 26.5746 155.945 28.0924 155.611 29.3735C155.288 30.6437 154.868 31.731 154.352 32.6352C153.835 33.5287 153.254 34.2554 152.608 34.8151C151.962 35.3749 151.316 35.8055 150.67 36.1069C150.024 36.4191 149.416 36.629 148.846 36.7367C148.275 36.8551 147.807 36.9143 147.441 36.9143C147.355 36.9143 147.161 36.9089 146.859 36.8982C146.569 36.8874 146.208 36.8605 145.778 36.8174C145.347 36.7851 144.857 36.7313 144.308 36.6559C143.77 36.5806 143.205 36.4729 142.613 36.333C142.623 34.2015 142.634 32.3554 142.645 30.7944C142.666 29.2228 142.683 27.8718 142.693 26.7414C142.704 25.6111 142.715 24.6638 142.726 23.8995C142.736 23.1352 142.742 22.4785 142.742 21.9295C142.753 21.3805 142.758 20.9122 142.758 20.5247C142.769 20.1264 142.774 19.7389 142.774 19.3621C142.774 18.77 142.769 18.1618 142.758 17.5374C142.747 16.9023 142.726 16.2887 142.693 15.6966C142.661 15.1046 142.618 14.5502 142.564 14.0334C142.51 13.5167 142.44 13.0754 142.354 12.7094C143.194 12.6555 143.958 12.6232 144.647 12.6125C145.347 12.5909 145.95 12.5802 146.456 12.5802C147.726 12.5802 148.846 12.7363 149.814 13.0485C150.783 13.3499 151.623 13.7751 152.333 14.3241C153.055 14.8623 153.652 15.5136 154.126 16.2779C154.61 17.0315 154.998 17.8604 155.288 18.7646C155.59 19.6689 155.8 20.6377 155.918 21.6712C156.047 22.6938 156.112 23.7434 156.112 24.8199ZM151.914 24.3193C151.914 22.4139 151.822 20.8638 151.639 19.6689C151.467 18.4632 151.181 17.5267 150.783 16.8592C150.396 16.1918 149.884 15.7397 149.249 15.5029C148.625 15.2553 147.866 15.1315 146.972 15.1315H146.488L146.682 34.1047C146.897 34.1908 147.096 34.25 147.279 34.2823C147.473 34.3038 147.661 34.3146 147.844 34.3146C148.566 34.3146 149.179 34.1477 149.685 33.814C150.202 33.4695 150.622 32.9097 150.945 32.1347C151.278 31.3488 151.521 30.3208 151.671 29.0505C151.833 27.7695 151.914 26.1924 151.914 24.3193Z"
        fill="white"
      />
      <path
        d="M173.135 12.887C172.662 14.1357 172.215 15.3844 171.795 16.6332C171.375 17.8819 170.972 19.136 170.584 20.3955C170.207 21.655 169.836 22.9199 169.47 24.1902C169.104 25.4604 168.738 26.7307 168.372 28.0009C168.447 29.4434 168.528 30.8752 168.614 32.2961C168.7 33.7064 168.819 35.1273 168.969 36.5591L164.044 36.7528C164.184 35.0735 164.287 33.4103 164.351 31.7633C164.427 30.1162 164.48 28.4531 164.513 26.7737C163.673 24.3732 162.79 22.0156 161.865 19.7012C160.939 17.376 159.959 15.0561 158.926 12.7417C159.722 12.7201 160.567 12.6878 161.461 12.6448C162.354 12.5909 163.183 12.5048 163.948 12.3864C164.141 13.3768 164.324 14.3672 164.497 15.3575C164.68 16.3479 164.863 17.3437 165.046 18.3448C165.239 19.3352 165.444 20.3202 165.659 21.2998C165.874 22.2794 166.122 23.2428 166.402 24.1902C166.865 22.2525 167.279 20.304 167.645 18.3448C168.011 16.3856 168.334 14.4533 168.614 12.5479C170.1 12.7417 171.607 12.8547 173.135 12.887Z"
        fill="white"
      />
    </svg>
  );
}