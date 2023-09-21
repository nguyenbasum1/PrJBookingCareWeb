import db from "../models/index";
import CRUDsevices from "../sevices/CRUDsevices";

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
let postCRUD = async (req, res) => {
    let mess = await CRUDsevices.createNewUser(req.body);// req.body lay data tu form
    console.log(mess);
    // return res.render('crud'); // ko can .ejs boi vi config/viewEngine da khai bao r 
    // console.log(req.body);
    return res.send('abc');
}
let getCRUD = (req, res) => {
    return res.render('crud');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDsevices.getAllUser({ raw: true, });// raw la cho data hien thi ngan hon
    console.log(data);
    console.log('----------------------------')
    return res.render('displayCRUD',{dataTable : data, }); // using dataTable is display data in srceen

}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}