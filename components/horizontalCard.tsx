import { Box, Text } from "@chakra-ui/react";
import styles from "./horizontalCard.module.css";

interface Props {
  coverImage: string;
  header: string;
  buttons?: React.ReactNode;
}

const HCard: React.FC<Props> = (props) => {
  return (
    <Box className={styles.card}>
      <Box className={styles["cover-image"]}>
        <img src={props.coverImage} alt="Cover image" />
      </Box>
      <Box padding="8">
        <Text as="h4" mb="2">
          {props.header}
        </Text>
        <Text color="grey">{props.children}</Text>
      </Box>
    </Box>
  );
};

export default HCard;
