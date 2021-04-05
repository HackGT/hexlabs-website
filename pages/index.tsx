import { GetServerSideProps } from "next";

interface Props {}

export default function Home(props: Props) {
  return (
    <h1>hi</h1>
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
