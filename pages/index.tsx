import Layout from "layout";
import NavBar from "../components/navbar";
import { GetServerSideProps } from "next";

interface Props {}

export default function Home(props: Props) {
  return (
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
