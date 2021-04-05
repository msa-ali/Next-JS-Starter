import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const { slug } = router.query;
  return (
    <div>
      <h1>The Blog Page {slug.join(", ")} </h1>
    </div>
  );
};

export default BlogPostsPage;
