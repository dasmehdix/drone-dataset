const fs = require("fs");
const { Builder, Parser } = require("xml2js");

let foldersThatHaveEvr = "C:\\tensorflow1\\models\\research\\object_detection\\images"
let foldername = 'test'

const parser = new Parser();
const builder = new Builder({
  headless: true
});

const folder = `${foldersThatHaveEvr}\\${foldername}`

fs.readdir(folder, (err, files) => {
  files.filter(file => file.indexOf('xml') !== -1).forEach(file => {
    fs.readFile(`${folder}\\${file}`, (err, data) => {
      parser.parseString(data, (err, result) => {
        result.annotation.folder[0] = foldername;
        result.annotation.filename[0] = `${file.split('.')[0]}.jpg`
        result.annotation.path[0] = `${foldersThatHaveEvr}\\${foldername}\\${file.split('.')[0]}.jpg`
        console.log(result)
        console.log(`${foldersThatHaveEvr}\\${foldername}\\${file.split('.')[0]}.jpg`)
        fs.writeFile(
          `${foldersThatHaveEvr}\\${foldername}\\${file.split('.')[0]}.xml`,
          builder.buildObject(result),
          (data, err) => {
            console.log(data);
          }
        );
      });
    });
  });
});
