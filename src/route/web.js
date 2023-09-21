import Express from "express";
import homeController from "../controllers/homeController";

let router = Express.Router();
let initWebRouter = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);
    return app.use("/", router);

}
module.exports = initWebRouter;