"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggIn) {
        next();
        return;
    }
    res.status(403).send("Not Permitted");
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"post\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" / >\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\"/>\n      </div>\n      <button>submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "hi@hi.com" && password === "password") {
        req.session = { loggIn: true };
        res.redirect('/');
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggIn) {
        res.send("\n      <div>\n        <h1>You are logged in</h1>\n        <a href='/logout'>logout</a>\n      <div>\n     ");
    }
    else {
        res.send("\n      <div>\n        <h1>You are not logged in</h1>\n        <a href='/login'>login</a>\n      </div>\n     ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send("\n    <h1>Welcome to protected route, logged in user</h1>\n  ");
});
