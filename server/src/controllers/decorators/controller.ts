import 'reflect-metadata'
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler, Request, Response, NextFunction } from 'express';

function bodyValidators(keys: string[]):RequestHandler {
  return function (req:Request, res:Response, next:NextFunction) {

    if (!req.body) {
      res.status(422).send('Invalid request')
      return 
    }
    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`missing body ${key}`)
        return 
      }
    }
    next()
  }
}


export function controller(routePrefix: string) {
  return function (target: Function):void {
    for (const key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
      const method = Reflect.getMetadata(MetadataKeys.method, target.prototype, key) as string
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || []
      const  requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || []


      if ( path ) {
        AppRouter.getInstance()[method as Methods](`${routePrefix}${path}`,...middlewares,bodyValidators(requiredBodyProps), routeHandler)
      }
    }
  }
}