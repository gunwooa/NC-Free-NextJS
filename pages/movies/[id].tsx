import { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>상세 페이지</h1>
    </div>
  );
};

export default Detail;
