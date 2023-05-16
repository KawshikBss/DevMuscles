var LocalStrategy = require("passport-local");
var UserModel = require("../models/users");
var bcrypt = require("bcrypt");

var CredentialStrategy = new LocalStrategy(
    { username: "email", password: "password" },
    async (username, password, next) => {
        try {
            var user = await UserModel.find({ email: username });
            if (!user) {
                return next(null, flase, {
                    message: "You have entered an invalid email address!",
                });
            }
            if (!bcrypt.compare(password, user.password)) {
                return next(null, false, {
                    message: "The password you have entered is incorrect!",
                });
            }
            return next(null, user);
        } catch (err) {
            return next(err);
        }
    }
);
