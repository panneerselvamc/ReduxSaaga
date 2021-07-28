import React, { useState } from 'react';

const MarketplaceAnimation = (props) => {
  const { active } = props;
  const makeId = feature => feature.replace(/\s/, '_');

  const getCircle = ({ feature, radius, x, y }) => {
    const radiusBig = radius * 1.5;
    return (
      <ellipse cx={x} cy={y} rx={radiusBig} ry={radiusBig} fill="white">
        <animate className={`${makeId(feature)}-activate`} attributeName="rx" values={`${radius};${radiusBig}`} dur="500ms" begin="indefinite" fill="freeze" />
        <animate className={`${makeId(feature)}-activate`} attributeName="ry" values={`${radius};${radiusBig}`} dur="500ms" begin="indefinite" fill="freeze" />
        <animate className={`${makeId(feature)}-deactivate`} attributeName="rx" values={`${radiusBig};${radius}`} dur="500ms" begin="indefinite" fill="freeze" />
        <animate className={`${makeId(feature)}-deactivate`} attributeName="ry" values={`${radiusBig};${radius}`} dur="500ms" begin="indefinite" fill="freeze" />
      </ellipse>
    );
  };

  const getCircleForFeature = ({ feature, radius, x, y }) => <g>{getCircle({ feature, radius, x, y })}</g>;

  const itemList = ['Cryptocurrency', 'Banking', 'Mutual Funds', 'Alternative Investments', 'Bonds', 'Stocks'];
  const itemDetailMap = {
    'Cryptocurrency': { radius: 54, x: 62, y: 371.5 },
    'Banking': { radius: 54, x: 315.5, y: 454 },
    'Mutual Funds': { radius: 54, x: 498, y: 140.5 },
    'Alternative Investments': { radius: 36, x: 350, y: 44.5 },
    'Bonds': { radius: 46, x: 549, y: 360.5 },
    'Stocks': { radius: 54, x: 191.5, y: 180 },
  };

  return (
    <svg width="653" height="580" viewBox="0 0 653 566" fill="none" style={{ width: '100%' }}>
      <g transform="translate(25, 5)">
        <circle opacity="0.3" cx="293" cy="305" r="260.5" fill="#DEDFEF" stroke="#BABEFE" />
        <circle cx="293" cy="305" r="158.5" fill="#F7F7FF" stroke="#BABEFE" />
        <circle cx="293" cy="297" r="63" fill="#061566" />
        <rect x="254" y="275" width="78" height="45" fill="url(#pattern0)" />

        {itemList.map((item) => getCircleForFeature({
          feature: item,
          radius: itemDetailMap[item].radius,
          x: itemDetailMap[item].x,
          y: itemDetailMap[item].y,
        }))}

        <path d="M53.5556 47.3H59.8889V66.2H53.5556V72.5H49.3333V66.2H43V47.3H49.3333V41H53.5556V47.3ZM74.6667 57.8H81V76.7H74.6667V83H70.4444V76.7H64.1111V57.8H70.4444V51.5H74.6667V57.8Z" style={{ transform: 'translate(130px, 120px)' }}>
          <animate className={`${makeId('Stocks')}-deactivate`} attributeType="XML" attributeName="fill" from="#0ACF65" to="#C4C4C4" dur="500ms" fill="freeze" />
          <animate className={`${makeId('Stocks')}-activate`} attributeType="XML" attributeName="fill" from="#C4C4C4" to="#0ACF65" dur="500ms" fill="freeze" />
        </path>
        <path d="M82.3636 376.078C79.5601 387.338 68.1636 394.173 56.9208 391.371C45.6753 388.589 38.8253 377.165 41.6341 365.934C44.431 354.676 55.834 347.826 67.0703 350.628C78.3224 353.439 85.1723 364.828 82.3636 376.086V376.078ZM71.2546 368.006C71.6706 365.223 69.5444 363.721 66.6333 362.709L67.5783 358.941L65.2735 358.359L64.3587 362.051C63.7563 361.894 63.1289 361.757 62.4989 361.614L63.4163 357.888L61.105 357.314L60.1613 361.101L58.6913 360.753L55.5203 359.959L54.9048 362.428C54.9048 362.428 56.615 362.816 56.573 362.837C57.5114 363.078 57.6807 363.684 57.6545 364.177L55.0701 374.54C54.9402 374.828 54.6462 375.252 53.9978 375.087C54.0188 375.12 52.3165 374.671 52.3165 374.671L51.1615 377.308L54.1553 378.053L55.7815 378.477L54.8313 382.314L57.1426 382.881L58.0928 379.086C58.7215 379.265 59.3226 379.421 59.9238 379.565L59.0365 383.331L61.3465 383.912L62.2968 380.078C66.2198 380.823 69.1743 380.529 70.4185 376.974C71.416 374.109 70.3621 372.463 68.2923 371.383C69.782 371.04 70.9173 370.05 71.231 368.006H71.2546ZM65.9836 375.395C65.2801 378.266 60.4606 376.708 58.8961 376.318L60.16 371.247C61.7258 371.649 66.7291 372.421 65.9836 375.395ZM66.7028 367.972C66.0518 370.582 62.0461 369.263 60.7401 368.934L61.8899 364.314C63.188 364.628 67.3775 365.229 66.7028 367.964V367.972Z">
          <animate className={`${makeId('Cryptocurrency')}-deactivate`} attributeType="XML" attributeName="fill" from="#FFBB00" to="#C4C4C4" dur="500ms" fill="freeze" />
          <animate className={`${makeId('Cryptocurrency')}-activate`} attributeType="XML" attributeName="fill" from="#C4C4C4" to="#FFBB00" dur="500ms" fill="freeze" />
        </path>
        <path d="M296 446V454.002H298V466H296V472H328L334 472.002V472H336V466H334V454.002H336V446L316 434L296 446ZM304 466V454.002H308V466H304ZM314 466V454.002H318V466H314ZM328 466H324V454.002H328V466ZM320 446C320 446.525 319.896 447.046 319.695 447.531C319.494 448.016 319.199 448.457 318.827 448.829C318.456 449.2 318.015 449.495 317.529 449.696C317.044 449.897 316.523 450 315.998 450C315.473 450 314.952 449.896 314.467 449.695C313.982 449.494 313.541 449.199 313.169 448.827C312.798 448.456 312.503 448.015 312.302 447.529C312.101 447.044 311.998 446.523 311.998 445.998C311.998 444.937 312.42 443.919 313.171 443.169C313.921 442.419 314.939 441.998 316 441.998C317.061 441.998 318.079 442.42 318.829 443.171C319.579 443.921 320 444.939 320 446Z">
          <animate className={`${makeId('Banking')}-deactivate`} attributeType="XML" attributeName="fill" from="#0CB6FF" to="#C4C4C4" dur="500ms" fill="freeze" />
          <animate className={`${makeId('Banking')}-activate`} attributeType="XML" attributeName="fill" from="#C4C4C4" to="#0CB6FF" dur="500ms" fill="freeze" />
        </path>
        <path d="M513.438 130.938H482.562C481.906 130.938 481.375 131.468 481.375 132.125V138.062H514.625V132.125C514.625 131.468 514.094 130.938 513.438 130.938ZM481.375 155.875C481.375 156.532 481.906 157.062 482.562 157.062H513.438C514.094 157.062 514.625 156.532 514.625 155.875V141.328H481.375V155.875ZM502.861 149.047C502.861 148.884 502.995 148.75 503.158 148.75H509.281C509.445 148.75 509.578 148.884 509.578 149.047V151.719C509.578 151.882 509.445 152.016 509.281 152.016H503.158C502.995 152.016 502.861 151.882 502.861 151.719V149.047Z">
          <animate className={`${makeId('Mutual Funds')}-deactivate`} attributeType="XML" attributeName="fill" from="#407BFF" to="#C4C4C4" dur="500ms" fill="freeze" />
          <animate className={`${makeId('Mutual Funds')}-activate`} attributeType="XML" attributeName="fill" from="#C4C4C4" to="#407BFF" dur="500ms" fill="freeze" />
        </path>
        <path d="M549 340C537.96 340 529 348.96 529 360C529 371.04 537.96 380 549 380C560.04 380 569 371.04 569 360C569 348.96 560.04 340 549 340ZM552.76 359.08L542.84 369L540.02 366.18L549.94 356.26L545.68 352L556.98 352.02L557 363.32L552.76 359.08Z">
          <animate className={`${makeId('Bonds')}-deactivate`} attributeType="XML" attributeName="fill" from="#1480BD" to="#C4C4C4" dur="500ms" fill="freeze" />
          <animate className={`${makeId('Bonds')}-activate`} attributeType="XML" attributeName="fill" from="#C4C4C4" to="#1480BD" dur="500ms" fill="freeze" />
        </path>
        <path d="M348.417 49.3167H348.336C347.937 49.3167 347.555 49.1584 347.273 48.8766C346.992 48.5948 346.833 48.2127 346.833 47.8142C346.833 47.3942 346.666 46.9915 346.37 46.6946C346.073 46.3976 345.67 46.2308 345.25 46.2308C344.83 46.2308 344.427 46.3976 344.13 46.6946C343.833 46.9915 343.667 47.3942 343.667 47.8142C343.667 49.0525 344.159 50.2402 345.034 51.1158C345.91 51.9915 347.098 52.4834 348.336 52.4834H348.417V54.0667C348.417 54.4867 348.583 54.8894 348.88 55.1863C349.177 55.4833 349.58 55.6501 350 55.6501C350.42 55.6501 350.823 55.4833 351.12 55.1863C351.416 54.8894 351.583 54.4867 351.583 54.0667V52.4834C352.843 52.4834 354.051 51.983 354.942 51.0922C355.833 50.2014 356.333 48.9932 356.333 47.7334C356.333 46.4736 355.833 45.2654 354.942 44.3746C354.051 43.4838 352.843 42.9834 351.583 42.9834V39.8167H351.618C352.473 39.8167 353.167 40.5102 353.167 41.3652C353.167 41.7852 353.333 42.1879 353.63 42.4848C353.927 42.7818 354.33 42.9486 354.75 42.9486C355.17 42.9486 355.573 42.7818 355.87 42.4848C356.166 42.1879 356.333 41.7852 356.333 41.3652C356.333 40.1147 355.837 38.9154 354.952 38.0311C354.068 37.1468 352.869 36.6501 351.618 36.6501H351.583V35.0667C351.583 34.6468 351.416 34.2441 351.12 33.9471C350.823 33.6502 350.42 33.4834 350 33.4834C349.58 33.4834 349.177 33.6502 348.88 33.9471C348.583 34.2441 348.417 34.6468 348.417 35.0667V36.6501C347.157 36.6501 345.949 37.1505 345.058 38.0413C344.167 38.9321 343.667 40.1403 343.667 41.4001C343.667 42.6598 344.167 43.868 345.058 44.7588C345.949 45.6496 347.157 46.1501 348.417 46.1501V49.3167ZM351.583 49.3167V46.1501C352.003 46.1501 352.406 46.3169 352.703 46.6138C353 46.9107 353.167 47.3135 353.167 47.7334C353.167 48.1533 353 48.5561 352.703 48.853C352.406 49.1499 352.003 49.3167 351.583 49.3167ZM348.417 39.8167V42.9834C347.997 42.9834 347.594 42.8166 347.297 42.5197C347 42.2227 346.833 41.82 346.833 41.4001C346.833 40.9801 347 40.5774 347.297 40.2805C347.594 39.9835 347.997 39.8167 348.417 39.8167ZM350 60.4001C341.255 60.4001 334.167 53.3115 334.167 44.5667C334.167 35.822 341.255 28.7334 350 28.7334C358.745 28.7334 365.833 35.822 365.833 44.5667C365.833 53.3115 358.745 60.4001 350 60.4001Z">
          <animate className={`${makeId('Alternative Investments')}-deactivate`} attributeType="XML" attributeName="fill" from="#8919BE" to="#C4C4C4" dur="500ms" fill="freeze" />
          <animate className={`${makeId('Alternative Investments')}-activate`} attributeType="XML" attributeName="fill" from="#C4C4C4" to="#8919BE" dur="500ms" fill="freeze" />
        </path>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use transform="translate(0 -0.00322581) scale(0.00403226 0.00698925)" />
        </pattern>
        <filter id="filter0_d" x="0" y="309" width="124" height="125" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.752014 0 0 0 0 0.752014 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter1_d" x="253" y="392" width="125" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.752014 0 0 0 0 0.752014 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter2_d" x="436" y="78" width="124" height="125" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.752014 0 0 0 0 0.752014 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter3_d" x="306" y="0" width="88" height="89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.752014 0 0 0 0 0.752014 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter4_d" x="495" y="306" width="108" height="109" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.752014 0 0 0 0 0.752014 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter5_d" x="93" y="82" width="197" height="196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="8.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.816667 0 0 0 0 0.752014 0 0 0 0 0.752014 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <image id="image0" width="248" height="144" />
      </defs>
    </svg>
  );
};

export default MarketplaceAnimation;
