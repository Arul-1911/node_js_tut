const fs = require("fs");

const newDir = () => {
  fs.mkdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("folder created succesfuly");
  });
};

if (!fs.existsSync('./newFolder')) {
  newDir();
} else {
   fs.rmdir('./newFolder',(err) => {
    if (err) throw err;
    console.log("folder Deleted succesfuly");
  })
}

//error handling
process.on("uncaughtException", (err) => {
  console.error(`user defined error,${err}`);
  process.exit(1);
});
