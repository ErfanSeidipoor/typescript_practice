import { Request, Response, NextFunction } from "express";
import { get, post, controller, use, bodyvalidator } from './decorators'

function logger (req: Request, res: Response, next:NextFunction): void {
  console.log('logger middleware >> ', req.method);
  next()
}

@controller('/auth') // route path
class LoginController {

  @get('/logout')
  logout(req: Request, res: Response): void {
    req.session = undefined
    res.redirect('/')
  }

  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="post">
        <div>
          <label>Email</label>
          <input name="email" / >
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>submit</button>
      </form>
    `)
  }

  @post('/login')
  @use(logger)
  @bodyvalidator(['email', 'password'])
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body
    if (email && password && email==="hi@hi.com" && password==="password") {
      req.session = { loggIn: true }
      res.redirect('/')
    }
    else {
      res.send("Invalid email or password")
    }
  }
}