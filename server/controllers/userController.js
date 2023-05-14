var UserModel = require("../models/users");

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find();
        res.jsonp({ data: users });
    } catch (err) {
        console.error(err);
        next();
    }
};
