import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/portfolio/clients">Client Page</Link>
        </li>
        <li>
          <Link href="/portfolio/1">Portfolio 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
