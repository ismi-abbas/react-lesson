import React from "react";
import { createHighlighter } from "shiki";

export const highlighter = await createHighlighter({
  themes: ["catppuccin-mocha", "catppuccin-frappe"],
  langs: ["javascript", "typescript", "json", "json5", "jsonc"],
});

export default function Code({ code }: { code: string }) {
  const [innerHtml, setHtml] = React.useState("Loading...");

  React.useEffect(() => {
    const result = highlighter.codeToHtml(code, {
      lang: "ts",
      theme: "catppuccin-mocha",
    });

    setHtml(result);
  }, [code]);

  return (
    <div className="p-2 font-mono rounded-lg bg-[#1e1e2e] overflow-x-auto text-sm">
      <div dangerouslySetInnerHTML={{ __html: innerHtml }} />
    </div>
  );
}
