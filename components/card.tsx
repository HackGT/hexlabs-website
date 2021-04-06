import { Button, ButtonType } from "./button";
import styles from "./card.module.css";

interface Props {
  coverImage: string;
  header: string;
  buttons?: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["cover-image"]}>
        <img src={props.coverImage} alt="Cover image" />
      </div>
      <div className={styles.content}>
        <h4>{props.header}</h4>
        <p>{props.children}</p>
        {props.buttons && (
          <div className={styles["button-container"]}>{props.buttons}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
