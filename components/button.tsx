import { jsx, css, SerializedStyles } from "@emotion/react";

import styles from "./button.module.css";

export enum ButtonType {
  SOLID,
  OUTLINED,
  TEXT,
}

interface Props {
  type: ButtonType;
}

export const Button: React.FC<Props> = (props) => {
  let typeStyles: SerializedStyles;

  switch (props.type) {
    case ButtonType.OUTLINED:
      typeStyles = css`
        background: transparent;
        border: 0.2rem solid var(--color-purple);
        color: var(--color-purple);
        padding: 0.55em 2.2rem;
      `;
      break;
    case ButtonType.SOLID:
      typeStyles = css`
        background: var(--color-purple);
        border: none;
        color: var(--color-white);
        padding: 0.55em 2.2rem;
      `;
      break;
    case ButtonType.TEXT:
      typeStyles = css`
        background: transparent;
        border: none;
        color: var(--color-purple);
        padding: 0.55em 0;
      `;
      break;
  }

  return (
    <button className={`${styles.button}`} css={typeStyles}>
      {props.children}
    </button>
  );
};
