const path = require("path");
const fsPromises = require('fs').promises

const fileops = async () => {
   try {
      const readData = await fsPromises.readFile(
        path.join(__dirname, "sample", "demo.txt"),
        "utf-8"
      );
      console.log(readData);

      await fsPromises.writeFile(path.join(__dirname, 'sample', 'sample2.txt'), 'hi, this is from file 2 sample');

      await fsPromises.appendFile(path.join(__dirname, "sample", "sample2.txt"),"\n\n hi, this from 2nd append");

      await fsPromises.rename(path.join(__dirname, "sample", "sample2.txt"),path.join(__dirname,"sample", "sample2Updated.txt"));

      await fsPromises.unlink(path.join(__dirname,'sample','demo.txt'));
      console.log('file deleted succesfully')
      
   } catch (error) {
      console.error(error)
   }
}

fileops()


    




process.on("uncaughtException", (err) => {
  console.error(`user mentioned errr${err}`);
  process.exit(1);
});
