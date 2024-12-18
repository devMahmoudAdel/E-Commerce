const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

let dbnamee;
if (process.env.NODE_ENV == "production") {
  dbnamee = "E-commerce_Production";
} else if (process.env.NODE_ENV == "development") {
  dbnamee = "E-commerce_Dev";
}
const app = require("./app");
mongoose.connect(process.env.CONN_STR, { dbName: dbnamee }).then((CONN) => {
  console.log("DB COnnection Successful");
});

const port = process.env.PORT;
console.log(process.env.PORT);
const server = app.listen(port, () => {
  console.log("server has started in port..." + `${port}`);
});
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
