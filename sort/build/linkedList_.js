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
var Mode = /** @class */ (function () {
    function Mode(data) {
        this.data = data;
        this.next = null;
    }
    return Mode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        if (!this.head) {
            this.head = new Mode(data);
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = new Mode(data);
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var mode = this.head;
            var length = 1;
            while (mode.next) {
                length += 1;
                mode = mode.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (i) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var mode = this.head;
        var count = 1;
        while (mode) {
            if (count === (i + 1)) {
                return mode;
            }
            count += 1;
            mode = mode.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (i, j) {
        if (!this.head) {
            throw new Error('List is Empty');
        }
        return this.at(i).data > this.at(j).data;
    };
    LinkedList.prototype.swap = function (i, j) {
        if (!this.head) {
            throw new Error('List is Empty');
        }
        var temp = this.at(i).data;
        this.at(i).data = this.at(j).data;
        this.at(j).data = temp;
    };
    LinkedList.prototype.print = function () {
        var output = '[';
        for (var i = 0; i < this.length; i++) {
            output += ' ' + this.at(i).data;
        }
        output += ' ]';
        console.log(output);
    };
    return LinkedList;
}(Sorter__1.Sorter));
exports.default = LinkedList;
