fs = require("fs");

const downloadImage = async (url, path) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFile(path, buffer);
};
downloadImage(
  "https://sabe.io/images/saturn.png",
  "../frontend/images/saturn.png"
);
