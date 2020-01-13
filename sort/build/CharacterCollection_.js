"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter__1 = require("./Sorter__");
var CharacterCollection = /** @class */ (function (_super) {
    __extends(CharacterCollection, _super);
    function CharacterCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (i, j) {
        return this.data.split("")[i].toLowerCase() > this.data.split("")[j].toLowerCase();
    };
    CharacterCollection.prototype.swap = function (i, j) {
        var spliteData = this.data.split("");
        var temp = spliteData[i];
        spliteData[i] = spliteData[j];
        spliteData[j] = temp;
        this.data = spliteData.join("");
    };
    return CharacterCollection;
}(Sorter__1.Sorter));
exports.default = CharacterCollection;
// interface Sortable {
//   length: number,
//   compare(i:number, j:number):boolean;
//   swap(i: number, j:number): void; 
// }
