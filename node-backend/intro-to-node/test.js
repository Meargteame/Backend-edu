import fs from "node:fs/promises";

// reading a file using the node fs module
const readPackageJson = async () => {
  const pJsonPath = new URL("./package.json", import.meta.url).pathname;
  let file = await fs.readFile(pJsonPath);
  file = JSON.parse(file);
  console.log(file);
};

readPackageJson();
