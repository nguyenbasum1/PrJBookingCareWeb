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
    await CRUDsevices.createNewUser(req.body);// req.body lay data tu form
    return console.log("creat user comple ~~~");
    // return res.render('crud'); // ko can .ejs boi vi config/viewEngine da khai bao r 
    // console.log(req.body);


}
let getCRUD = (req, res) => {
    return res.render('crud');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDsevices.getAllUser({ raw: true, });// raw la cho data hien thi ngan hon
    // console.log(data);
    // console.log('----------------------------')
    return res.render('displayCRUD', { dataTable: data, }); // using dataTable is display data in srceen

}
let editGetCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDsevices.getUserInfoById(userId);
        // cjeck data not found
        return res.render("editCRUD", { user: userData });// ejs editCRUD can using user ejs
        // console.log(userData); 
        // return res.send("found is user !! ");
    }
    else return res.send("userid null");
    // console.log(req.query.id);// check request user
    // return res.send('edit views');// check view
}
let putCRUD = async (req, res) => {
    let data = req.body;
    // console.log(data);
    let allUsers = await CRUDsevices.updateUserData(data);
    // return res.send("updata done !!! ");
    return res.render("displayCRUD", { dataTable: allUsers });
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id; // req.query because ?id= in link 
    // console.log(id);
    if (id) {
        await CRUDsevices.deleteUserById(id);
        return res.send("delete comple !!! ");
    }
    else return res.send("userid null and delete found ");
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    editGetCRUD: editGetCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}