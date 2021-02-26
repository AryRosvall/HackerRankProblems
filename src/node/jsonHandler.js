const fs = require('fs');
const path = require('path');

const jsonHandler = fileName => {
  return new Promise((resolve, reject) => {

    if (!fs.existsSync(fileName)) {
      throw new Error('File Does Not Exist');
    }

    if (fs.lstatSync(fileName).isDirectory()) {
      throw new Error('Path is a directory');
    }
    fs.readFile(fileName, 'utf8', (err, data) => {

      try {

        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      } catch (error) {
        throw new Error('JSON Invalid');
      }
    });
  })
  /*  const file = fs.readFileSync(fileName, 'utf8');
   console.log("🚀 ~ file: jsonHandler.js ~ line 9 ~ file", file) */

}

jsonHandler(`${path.resolve(__dirname)}/examp`)
  .then(data => console.log(data));