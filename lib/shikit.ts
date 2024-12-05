import { codeToHtml } from "shiki";

const code = "const a = 1"; // input code
const html = await codeToHtml(code, {
  lang: "javascript",
  theme: "vitesse-dark",
});
