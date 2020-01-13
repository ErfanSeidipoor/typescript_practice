import express from 'express'
// import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import CookieSession from "cookie-session";

import "./controllers/LoginController";
import "./controllers/rootController";
import {AppRouter} from './AppRouter'


const app = express()
app.use(bodyParser.urlencoded({extended:  true}))
app.use(CookieSession({keys: ['alkdlkajsdlkjasdljalksd']  }))
// app.use(router)
app.use(AppRouter.getInstance())

app.listen(3693, ()=>console.log('Listening on port 3693'))