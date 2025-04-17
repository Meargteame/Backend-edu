import fs from "node:fs/promises";

// reading a file using the node fs module
const readPackageJson = async () => {
  const pJsonPath = new URL("./package.json", import.meta.url).pathname;
  let file = await fs.readFile(pJsonPath, "utf-8");
  file = JSON.parse(file);
  console.log(file);
};

// readPackageJson();

// Writing to a file with the node fs module

const writeFile = async () => {
  const newFilePath = new URL("./demo.js", import.meta.url).pathname;
  await fs.writeFile(newFilePath, `console.log("yoo!")`);
};

// writeFile();
