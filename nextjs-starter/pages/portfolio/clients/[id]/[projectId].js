import { useRouter } from "next/router";

const CLientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const projectId = router.query?.projectId ?? null;
  const id = router.query?.id ?? null;
  return (
    <div>
      <h1>
        The Client {id} with Project id {projectId}
      </h1>
    </div>
  );
};

export default CLientProjectPage;

// http://localhost:3000/portfolio/clients/122/1
