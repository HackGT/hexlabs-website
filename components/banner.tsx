import styles from "./banner.module.css";
import { useState } from "react";

function Cross({ onClick }) {
  return (
    <div
      tabindex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter") onClick() }}
    >
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.05887 6.875L11.7714 2.16249C11.8429 2.09341 11.9 2.01078 11.9392 1.91942C11.9784 1.82805 11.9991 1.72979 12 1.63036C12.0008 1.53093 11.9819 1.43232 11.9442 1.34029C11.9066 1.24826 11.851 1.16464 11.7807 1.09433C11.7104 1.02402 11.6267 0.968417 11.5347 0.930764C11.4427 0.893111 11.3441 0.874164 11.2446 0.875028C11.1452 0.875892 11.0469 0.89655 10.9556 0.935797C10.8642 0.975043 10.7816 1.03209 10.7125 1.10361L6 5.81613L1.28749 1.10361C1.14625 0.967206 0.957093 0.891726 0.760747 0.893432C0.564401 0.895139 0.37658 0.973894 0.237737 1.11274C0.0988943 1.25158 0.0201385 1.4394 0.0184323 1.63575C0.0167261 1.83209 0.0922059 2.02125 0.228615 2.16249L4.94113 6.875L0.228615 11.5875C0.157092 11.6566 0.100043 11.7392 0.0607968 11.8306C0.0215503 11.9219 0.000892309 12.0202 2.82741e-05 12.1196C-0.000835761 12.2191 0.0181114 12.3177 0.0557643 12.4097C0.0934171 12.5017 0.149022 12.5854 0.219333 12.6557C0.289645 12.726 0.373255 12.7816 0.465286 12.8192C0.557317 12.8569 0.655925 12.8758 0.755357 12.875C0.854789 12.8741 0.953053 12.8534 1.04442 12.8142C1.13578 12.775 1.21841 12.7179 1.28749 12.6464L6 7.93387L10.7125 12.6464C10.817 12.7518 10.9504 12.8238 11.0959 12.8531C11.2414 12.8824 11.3923 12.8677 11.5294 12.8109C11.6665 12.7541 11.7836 12.6578 11.8658 12.5342C11.948 12.4106 11.9915 12.2654 11.9908 12.1169C11.9908 12.0186 11.9714 11.9212 11.9338 11.8304C11.8962 11.7395 11.841 11.657 11.7714 11.5875L7.05887 6.875Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
}

export default function Banner({ children }) {
  const [isOpen, setOpen] = useState(true);
  const closeBanner = () => {
    setOpen(false);
  };

  if (isOpen) {
    return (
      <div className={styles.banner}>
        <div>{children}</div>
        <Cross onClick={closeBanner} />
      </div>
    );
  } else {
    return (null);
  }
}
