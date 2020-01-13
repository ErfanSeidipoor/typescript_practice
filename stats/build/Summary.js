"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    return Summary;
}());
exports.Summary = Summary;
