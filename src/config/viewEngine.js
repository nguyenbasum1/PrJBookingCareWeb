import Express from "express";
let configViewEngine = (app) => {
    app.use(Express.static("../public"));
    app.set("view engine", "ejs"); // jsp, blade
    app.set("views", "./src/views");
}
// let nen ap dung trong file thooi nen phai export 
module.exports = configViewEngine;