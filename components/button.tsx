import styles from "./button.module.scss";

export enum ButtonType {
  Solid,
  Outlined,
}

export default function Button({ text, type }) {
  if (type == ButtonType.Outlined) {
    return (
      <button className={`${styles.button} ${styles.outlined}`}>{text}</button>
    );
  } else {
    return (
      <button className={`${styles.button} ${styles.solid}`}>{text}</button>
    );
  }
}
