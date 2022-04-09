import { NextPage, GetServerSideProps } from "next";

import Seo from "../../components/Seo";

type Title = string;
type Id = string;
type DetailProps = {
  params: [Title, Id];
};

const Detail: NextPage<DetailProps> = ({ params }) => {
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps<{}, DetailProps> = async ({
  params,
}) => {
  return {
    props: {
      params: params?.params,
    },
  };
};
