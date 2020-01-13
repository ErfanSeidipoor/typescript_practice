import { Request, Response, NextFunction } from "express";
import { get, controller, use } from './decorators'


function requireAuth(req:Request, res: Response, next:NextFunction ):void {
  if (req.session && req.session.loggIn) {
    next();
    return;
  }
  res.status(403).send("Not Permitted")
}

@controller('') // route path
class RotController {

  
  // @get('/add')
  // add(a:number, b:number):number {
  //   return a+b
  // }

  @get('/')
  homePage(req: Request, res: Response): void {
    if (req.session && req.session.loggIn) {
      res.send(`
       <div>
         <h1>You are logged in</h1>
         <a href='/auth/logout'>logout</a>
       <div>
      `)
    } else {
      res.send(`
       <div>
         <h1>You are not logged in</h1>
         <a href='/auth/login'>login</a>
       </div>
      `)
    }
  }

  @get('/protected')
  @use(requireAuth)
  protected(req: Request, res: Response): void {
    res.send(`
      <h1>
        Welcome to protected route, logged in user
      </h1>
    `)
  }
}