import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Roobert";
        src: url("../public/fonts/Roobert/Roobert-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }

      @font-face {
        font-family: "Roobert";
        src: url("../public/fonts/Roobert/Roobert-Medium.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }

      @font-face {
        font-family: "Roobert";
        src: url("../public/fonts/Roobert/Roobert-SemiBold.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
      }

      @font-face {
        font-family: "Roobert";
        src: url("../public/fonts/Roobert/Roobert-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
      `}
  />
);
