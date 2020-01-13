import 'reflect-metadata'
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value ?: RequestHandler
}

function routeBinder(method: Methods , path: string) {
  return function(target: any, key: string, desc: RouteHandlerDescriptor) {
    Reflect.defineMetadata(MetadataKeys.method, method, target, key)
    Reflect.defineMetadata(MetadataKeys.path, path, target, key)
  }
}

export function get(path: string) {
  return routeBinder(Methods.get, path)
}
export function post(path: string) {
  return routeBinder(Methods.post, path)
}
export function put(path: string) {
  return routeBinder(Methods.put, path)
}
export function patch(path: string) {
  return routeBinder(Methods.patch, path)
}
export function del(path: string) {
  return routeBinder(Methods.del, path)
}
