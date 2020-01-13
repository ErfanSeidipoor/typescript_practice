import { MatchReader } from './matchReader' 
import { CsvFileReader } from './CsvFileReader'
import {  Summary } from "./Summary";
import {  WinsAnalysis } from "./analysers/WinsAnalysis";
import {  HtmlReport } from "./reportTargets/HtmlReport";
// const reader = new MatchReader('football.csv')
// reader.read()

const matchReader = new MatchReader(new CsvFileReader('football.csv'))
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches)