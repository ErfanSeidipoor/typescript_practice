import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: {
    [key:string]: string | undefined
  }
}

function requireAuth(req:Request, res: Response, next:NextFunction ):void {
  if (req.session && req.session.loggIn) {
    next();
    return;
  }
  res.status(403).send("Not Permitted")
}

const router = Router() 

router.get('/login', (req:Request, res:Response)=> {
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
})

router.post('/login', (req:RequestWithBody, res:Response)=> {
  const { email, password } = req.body
  if (email && password && email==="hi@hi.com" && password==="password") {
    req.session = { loggIn: true }
    res.redirect('/')
  }
  else {
    res.send("Invalid email or password")
  }
})

router.get('/', (req:Request, res:Response)=> {
   if (req.session && req.session.loggIn) {
     res.send(`
      <div>
        <h1>You are logged in</h1>
        <a href='/logout'>logout</a>
      <div>
     `)
   } else {
     res.send(`
      <div>
        <h1>You are not logged in</h1>
        <a href='/login'>login</a>
      </div>
     `)
   }
})

router.get('/logout', (req:Request, res:Response)=> {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req:Request, res:Response)=> {
  res.send(`
    <h1>Welcome to protected route, logged in user</h1>
  `)
})

export { router }