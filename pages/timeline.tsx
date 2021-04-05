import { GetServerSideProps } from "next";

interface Props {}

export default function Timeline(props: Props) {
  return (
    <div>
      <h1>Hello</h1>
    </div>
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
