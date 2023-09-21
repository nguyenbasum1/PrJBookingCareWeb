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
    return new Promise(async(resolve,reject)=>{
        
        try {
            let users = db.User.findAll();// db.User is modelName in models files
            resolve(users);
        } catch (error) {
            reject(error);   
        }
    });
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
}