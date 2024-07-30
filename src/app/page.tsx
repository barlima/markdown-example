import { getSubdomain } from "@/utils/getSubdomain";

export default function Home() {
  const subdomain = getSubdomain();

  return (
    <main>
      <h1>Hello {subdomain}</h1>
      <pre>Markdown goes here</pre>
    </main>
  );
}
