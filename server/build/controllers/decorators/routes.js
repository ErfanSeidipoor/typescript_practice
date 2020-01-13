"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method, path) {
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
    };
}
function get(path) {
    return routeBinder(Methods_1.Methods.get, path);
}
exports.get = get;
function post(path) {
    return routeBinder(Methods_1.Methods.post, path);
}
exports.post = post;
function put(path) {
    return routeBinder(Methods_1.Methods.put, path);
}
exports.put = put;
function patch(path) {
    return routeBinder(Methods_1.Methods.patch, path);
}
exports.patch = patch;
function del(path) {
    return routeBinder(Methods_1.Methods.del, path);
}
exports.del = del;
