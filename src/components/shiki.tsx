import React from "react";
import { createHighlighter } from "shiki";

const DEFAULT_LANG = "ts";
const DEFAULT_THEME = ["catppuccin-mocha", "catppuccin-latte"];

const highlighterPromise = createHighlighter({
  themes: DEFAULT_THEME,
  langs: [DEFAULT_LANG],
});

export default function Code({ code }: { code: string }) {
  const [innerHtml, setHtml] = React.useState("Loading...");

  React.useEffect(() => {
    highlighterPromise.then((highlighter) => {
      const html = highlighter.codeToHtml(code, {
        lang: DEFAULT_LANG,
        theme: DEFAULT_THEME[0],
      });
      setHtml(html);
    });
  }, [code]);

  return (
    <div
      className="p-4 border rounded-md font-mono text-sm"
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
}
