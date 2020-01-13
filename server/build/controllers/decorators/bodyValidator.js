"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function bodyvalidator(keys) {
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
exports.bodyvalidator = bodyvalidator;
