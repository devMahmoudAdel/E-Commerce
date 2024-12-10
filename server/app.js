const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cookiesMiddleware = require("universal-cookie-express");
const UserRoute = require("./routes/UserRoute");
const OrderRoute = require("./routes/OrderRoute");
const AdsRoute = require("./routes/AdsRoute");
const AdressRoute = require("./routes/AdressRoute");
const aboutUsRoute = require("./routes/aboutUsRoute");
const OwnerRoute = require("./routes/OwnerRoute");
const ContactRoute = require("./routes/contactRoute");
const adminRoute = require("./routes/adminRoute");
const productRoute = require("./routes/productRoute");
let app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cookiesMiddleware());
app.use(express.static("./public"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    withCredentials: true,
  })
);

app.use("/user", UserRoute);
app.use("/order", OrderRoute);
app.use("/ads", AdsRoute);
app.use("/adress", AdressRoute);
app.use("/aboutUs", aboutUsRoute);
app.use("/owner", OwnerRoute);
app.use("/contact", ContactRoute);
app.use("/admin", adminRoute);
app.use("product", productRoute);
app.use(express.static("public"));

module.exports = app;
