"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function logger(req, res, next) {
    console.log('logger middleware >> ', req.method);
    next();
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.logout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n      <form method=\"post\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\" / >\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>submit</button>\n      </form>\n    ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === "hi@hi.com" && password === "password") {
            req.session = { loggIn: true };
            res.redirect('/');
        }
        else {
            res.send("Invalid email or password");
        }
    };
    __decorate([
        decorators_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        decorators_1.get('/login'),
        decorators_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post('/login'),
        decorators_1.use(logger),
        decorators_1.bodyvalidator(['email', 'password']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    LoginController = __decorate([
        decorators_1.controller('/auth') // route path
    ], LoginController);
    return LoginController;
}());
