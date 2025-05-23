"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = exports.createJWT = exports.hashPassword = exports.comparePasswords = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import bcrypt from 'bcrypt'
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var comparePasswords = function (password, hash) {
    return bcryptjs_1.default.compare(password, hash);
};
exports.comparePasswords = comparePasswords;
var hashPassword = function (password) {
    return bcryptjs_1.default.hash(password, 5);
};
exports.hashPassword = hashPassword;
var createJWT = function (user) {
    var token = jsonwebtoken_1.default.sign({
        id: user.id,
        username: user.username
    }, process.env.JWT_SECRET_KEY);
    return token;
};
exports.createJWT = createJWT;
var protect = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.send("Not authorized");
        return;
    }
    var _a = bearer.split(' '), token = _a[1];
    if (!token) {
        res.status(401);
        res.send("Not valid token");
        return;
    }
    try {
        var user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch (e) {
        console.log(e);
        res.status(401);
        res.send("Not authorized");
        return;
    }
};
exports.protect = protect;
//# sourceMappingURL=auth.js.map