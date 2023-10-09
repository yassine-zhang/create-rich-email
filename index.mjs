#!/usr/bin/env node
// Import Prompts, minimist, kolorist, etc plug-ins.
import prompts from "prompts";
import parseArgs from "minimist";
import { lightRed, bgLightRed, bold, red } from "kolorist";
// import { fs, path } from "zx"
import * as fs from "node:fs";
import * as path from "node:path";

// Extract the command line parameters entered by the user.
const argv = parseArgs(process.argv.slice(2));

// Improve the return of calls with parameters.
const stdin = process.stdin;
// const version = readFileSync('./package.json').version;
// const version = "1.1.3";
const version = readJsonFileSync(
  path.resolve(__dirname, "package.json"),
).version;

if (argv.help) {
  stdin.write("\n" + bold("Usgae:") + "\n");
  stdin.write("  create-rich-email [options] [entry points]\n\n");
  stdin.write(bold("Repository:") + "\n");
  stdin.write("  https://github.com/yassine-zhang/create-rich-email\n\n");
  stdin.write(bold("Advanced options:") + "\n");
  stdin.write(
    `  --version                 Print the current version (${version}) and exit\n`,
  );
  stdin.write("\n");
} else if (argv.version) stdin.write(version + "\n");
else if (Object.keys(argv).length > 1) {
  // An error is printed when all previous options are invalid.
  const err_option = "--" + Object.keys(argv)[1];
  stdin.write(
    lightRed("✘") +
      " " +
      bgLightRed("[ERROR]") +
      " " +
      bold("Invalid variable flag: ") +
      `"${err_option}"\n\n`,
  );
  stdin.write("1 error\n");
  process.exit(1);
}

// Check whether the carried parameter is greater than 1. If yes, exit the process directly.
Object.keys(argv).length > 1 ? process.exit(0) : "";

// Start asking the user some key information.
(async () => {
  let response;
  try {
    const questions = [
      {
        type: "select",
        name: "template_name",
        message: "Please select a mail template",
        choices: [
          { title: "netease-edun", description: "", value: "netease-edun" },
          { title: "tencent-cloud", value: "tencent-cloud" },
          { title: "docker", value: "docker", disabled: true },
        ],
        // initial: 0
        warn: "This option function is not yet developed, please wait.",
      },
      {
        type: "text",
        name: "dirname",
        message: `Please enter the template directory name`,
        initial: "rich-email",
        validate: (value) =>
          isValidPackageName(value)
            ? true
            : "Please enter a valid directory name format.",
      },
    ];
    const onCancel = () => {
      throw new Error(red("✖") + " Operation cancelled");
    };

    // Gets the question response data object.
    response = await prompts(questions, { onCancel });
  } catch (cancelled) {
    console.log(cancelled.message);
    process.exit(1);
  }

  // Pull the template to the user local.
  const pull_template = (res) => {
    // Clear the directory or create one if no directory exists.
    emptyDirSync(path.resolve("./", res.dirname));

    // Scripts that use the .mjs suffix are flags for the ES module.
    // In ES modules, since the top-level scope of the module is automatically wrapped in functions,
    // the __dirname variable is not supplied directly.

    // You can use import.meta.url to get the URL of the current module file and process the URL to get the corresponding directory path.
    // Given that an error will be reported whenever esbuild is used, we will keep it the same. Then execute the built.cjs file.
    const template_root = path.resolve(__dirname, "template");

    // Provide the corresponding template according to the user's selection.
    const filenames = fs.readdirSync(
      path.resolve(template_root, res.template_name, "dist"),
    );
    fs.mkdirSync(path.resolve("./", res.dirname, res.template_name));

    // Copy all template dist folder data to the new directory in turn.
    for (let filename of filenames) {
      const buffer = fs.readFileSync(
        path.resolve(template_root, res.template_name, "dist", filename),
        "utf-8",
      );

      fs.writeFileSync(
        path.resolve("./", res.dirname, res.template_name, filename),
        buffer,
      );
    }
  };
  pull_template(response);
})();

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName,
  );
}

// Clear the directory or create one if no directory exists.
function emptyDirSync(dir) {
  if (fs.existsSync(dir)) removeDirRecursive(dir);
  fs.mkdirSync(dir);
}

// Recursively deletes a directory and its subdirectories.
function removeDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const currPath = path.join(dirPath, file);

      if (fs.lstatSync(currPath).isDirectory()) {
        // Delete subdirectories recursively.
        removeDirRecursive(currPath);
      } else {
        // Delete file.
        fs.unlinkSync(currPath);
      }
    });

    // Delete empty directory.
    fs.rmdirSync(dirPath);
  }
}

function readJsonFileSync(path) {
  try {
    const json_data = fs.readFileSync(path, "utf-8");
    return JSON.parse(json_data);
  } catch (error) {
    console.error(`Failed to read ${path} file:`, error.message);
  }
}
