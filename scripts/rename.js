import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const data = fs.readFileSync("../assets/datas/pictures.json", "utf-8");

let jsonData = JSON.parse(data);

let pictures = jsonData.pictures;

pictures.forEach((img) => {
  img.idPicture = `${img.idPicture}`;
});

jsonData = {
  pictures: pictures
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../assets/datas/pictures.json");
fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), "utf-8");