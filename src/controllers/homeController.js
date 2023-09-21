import db from "../models/index";


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homePage", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

    return res.render("homePage");
}
let getAboutPage = (req, res) => {
    return res.render('homePage');
}
let getCRUD = (req, res) => {
    // return res.send(`get CRUD`);
    return res.render('crud'); // ko can .ejs boi vi config/viewEngine da khai bao r 
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD
}