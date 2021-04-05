import Link from "next/link";
import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    // router.push("/portfolio/clients/ali/projecta");
    router.push({
      pathname: "/portfolio/clients/[id]/[projectId]",
      query: { id: "ali", projectId: "13132" },
    });
  };
  const clients = [
    { id: "altu", name: "Altamash Ali" },
    { id: "Mr X", name: "Mr X Man" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/portfolio/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

// `/portfolio/clients/${client.id}`
// or,
// href={{
//   pathname: "/portfolio/clients/[id]",
//   query: { id: client.id },
// }}

export default ClientPage;
