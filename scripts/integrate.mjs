#!/usr/bin/env zx
import "zx/globals";
import { cyan, magenta } from "kolorist";

const root = path.resolve(__dirname, "../template");
const desire_mode = "0o755";

// Enter the template directory.
console.log(cyan("Enter the template directory."));
fs.ensureDirSync(root);
cd(root);

// Provide the template directory name that you want to integrate.
const dir_flags = ["netease-edun", "netease-edun22"];

// Collect statistics on all directory names.
console.log(cyan("Collect statistics on all directory names."));
for await (let dir of dir_flags) {
  // Detects whether the directory exists, and enters it if it does.
  console.log(
    cyan("Detects whether the directory exists, and enters it if it does."),
  );
  const exists = fs.pathExistsSync(dir);

  if (exists) cd(dir);
  else break;

  let index_html = fs.readFileSync("index.html", "utf-8");

  // Gets the names of all externally referenced CSS files.
  // The RE matches the contents of all link tags.
  console.log(cyan("Gets the names of all externally referenced CSS files."));
  const regex = /<link.*?\/>/g;

  const matches = [...index_html.matchAll(regex)];
  for (const match of matches) {
    // Single link tag.
    const linkContent = match[0];
    // The regular matches the CSS file names extracted from a single link tag.
    console.log(
      cyan(
        "The regular matches the CSS file names extracted from a single link tag.",
      ),
    );
    const filename = linkContent
      .match(/<link.*?href=['"](.*?)['"].*?\/>/)[1]
      .split(".")[0];

    // Replace the CSS style into the HTML file.
    console.log(cyan("Replace the CSS style into the HTML file."));
    index_html = index_html.replace(
      linkContent,
      "<style>\n" + fs.readFileSync(filename + ".css", "utf-8") + "\n</style>",
    );
  }

  // Write back to the HTML file.
  console.log(cyan("Write back to the HTML file."));
  fs.ensureDirSync("dist", desire_mode);
  fs.writeFileSync("./dist/index.html", index_html, "utf-8");

  // await $`cd ../ && ls`
  // The above code will only work in the new shell process it opens up and should not be used here.
  cd("../");
}

// Execute the code formatting command.
console.log(magenta("Execute the code formatting command."));
await $`prettier . --write`;
