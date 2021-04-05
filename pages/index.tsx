import { GetServerSideProps } from "next";
import Hex from "../components/hex";

interface Props {}

export default function Home(props: Props) {
  return (
    <>
      <Hex borderSize={10} borderColor="black"/>
      <h1>hi</h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  // Make request here for data
  return {
    props: {}, // will be passed to the page component as props
  };
};
