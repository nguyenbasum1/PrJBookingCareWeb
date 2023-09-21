import Express from "express";
import bodyParser from "body-parser";
import viewEngine from "../src/config/viewEngine";
import initWebRouter from "./route/web";
import connectDB from "./config/connectDB";

require('dotenv').config();
let app = Express();
// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

connectDB();
let port = process.env.PORT || 9090;
// port == undefined => 9090
app.listen(port, () => {
    console.log("backend running on the port :", port);
});