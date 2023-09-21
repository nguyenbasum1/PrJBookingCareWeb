import Express from "express";
import homeController from "../controllers/homeController";

let router = Express.Router();
let initWebRouter = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    // restful api create
    router.get("/crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    // api display
    router.get("/get-crud", homeController.displayGetCRUD);
    return app.use("/", router);

}
module.exports = initWebRouter;