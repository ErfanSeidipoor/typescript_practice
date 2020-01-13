"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
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
}());
exports.CharacterCollection = CharacterCollection;
// interface Sortable {
//   length: number,
//   compare(i:number, j:number):boolean;
//   swap(i: number, j:number): void; 
// }
