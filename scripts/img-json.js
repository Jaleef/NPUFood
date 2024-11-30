import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pictureDir = path.join(__dirname, "../assets/pictures");

const url = "http://express-5yk7.fcv3.1777704029585349.cn-chengdu.fc.devsapp.net"

fs.readdir(pictureDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const picturesData = files
    .filter(file => file.endsWith('.jpg'))
    .map((file, index) => {
      const date = new Date().toISOString().split('T')[0];
      return {
        idPicture: `${index}`,
        namePicture: file,
        urlPicture: `${url}/image/${file}`,
        description: `Description for ${file}`,
        date: date
      };
    });
  
  picturesData.forEach((picture) => {
    console.log(picture.urlPicture);
  })
  const jsonData = {
    pictures: picturesData
  };

  const outputPath = path.join(__dirname, "../assets/datas/pictures.json");
  fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), "utf-8");

  console.log("JSON file has been created");
})