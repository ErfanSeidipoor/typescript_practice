"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchReader_1 = require("./matchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// const reader = new MatchReader('football.csv')
// reader.read()
var matchReader = new matchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
