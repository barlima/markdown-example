import Markdown from "react-markdown";

import { getMarkdown } from "@/utils/getContent";
import { getSubdomain } from "@/utils/getSubdomain";

export default async function Home() {
  const subdomain = getSubdomain();

  const { markdown } = await getMarkdown(subdomain);

  return (
    <main>
      <div>
        {markdown && (
          <Markdown className="markdown">{markdown.markdown}</Markdown>
        )}
      </div>
    </main>
  );
}
