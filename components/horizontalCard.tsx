import styles from "./horizontalCard.module.css";

interface Props {
  coverImage: string;
  header: string;
  buttons?: React.ReactNode;
}

const HCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["cover-image"]}>
        <img src={props.coverImage} alt="Cover image" />
      </div>
      <div className={styles.content}>
        <h4>{props.header}</h4>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default HCard;
