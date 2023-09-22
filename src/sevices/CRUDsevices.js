import bcrypt from 'bcryptjs';
import db from '../models';
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFrombcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === 1 ? true : false,
                phoneNumber: data.phoneNumber,
                roleId: data.roleId,
            });
            resolve("tạo thành công !!");
        } catch (error) {
            reject(error);
        }
    });
    // console.log("data from sevices :", data);
    // console.log("data from sevices from :", hashPasswordFrombcrypt);
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        // bẳt Exception
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {

        try {
            let users = db.User.findAll();// db.User is modelName in models files
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
}
let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: userId }, raw: true });
            if (user) {
                resolve(user);
            } else resolve([]);
        } catch (error) {
            reject(error);
        }

    });
}
let updateUserData = (data) => {
    // console.log("data from service"); //check form called function
    return new Promise(async (resolve, reject) => {
        try {
            //find user database is like user input 
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            // if y found user in database
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else resolve(); // resolve == return

        } catch (error) {

        }
    });
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
}