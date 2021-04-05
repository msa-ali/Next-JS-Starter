import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const id = router.query?.id ?? null;
  return (
    <div>
      <h1>The Portfolio Project Page {id}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
