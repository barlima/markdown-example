import { headers } from "next/headers";

export default function Home() {
  const hostname = headers().get("x-hostname");

  return (
    <main>
      <h1>Hello {hostname}</h1>
      <pre>Markdown goes here</pre>
    </main>
  );
}
