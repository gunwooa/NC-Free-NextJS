import Head from "next/head";
import { VFC } from "react";

type SeoProps = {
  title: string;
};
const Seo: VFC<SeoProps> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
