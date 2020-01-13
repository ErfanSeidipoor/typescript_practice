"use strict";
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
        this.length = data.length;
    }
    NumberCollection.prototype.swap = function (i, j) {
        var temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    };
    NumberCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return NumberCollection;
}());
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        if (this.collection instanceof Array) {
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
        if (typeof this.collection === 'number') {
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 5, 6, 4, 18]);
sorter.sort();
console.log(sorter.collection);
