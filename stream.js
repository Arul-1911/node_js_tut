const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "sample", "bigfiles.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(
  path.join(__dirname, "sample", "new_bigfiles.txt")
);



rs.pipe(ws)
