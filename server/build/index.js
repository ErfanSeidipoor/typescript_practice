"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { router } from "./routes/loginRoutes";
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
require("./controllers/rootController");
var AppRouter_1 = require("./AppRouter");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['alkdlkajsdlkjasdljalksd'] }));
// app.use(router)
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3693, function () { return console.log('Listening on port 3693'); });
