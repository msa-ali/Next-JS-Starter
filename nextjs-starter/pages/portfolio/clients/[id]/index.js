import { useRouter } from "next/router";

const SingleClientPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const id = router.query?.id ?? null;
  return (
    <div>
      <h1>The Client Page with id : {id}</h1>
    </div>
  );
};

export default SingleClientPage;
