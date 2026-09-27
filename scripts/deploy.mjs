import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

process.env.NEXT_PUBLIC_BASE_PATH = "/kapibara";

execSync("npx next build", { stdio: "inherit", env: process.env });
writeFileSync("out/.nojekyll", "");
execSync('npx --yes gh-pages@6 -d out -b gh-pages -m "Deploy site to GitHub Pages"', {
  stdio: "inherit",
});
