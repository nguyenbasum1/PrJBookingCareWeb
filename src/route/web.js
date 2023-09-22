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
    //api edit
    router.get("/gedit-crud", homeController.editGetCRUD);
    //
    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);
    return app.use("/", router);
    // delete


}
module.exports = initWebRouter;