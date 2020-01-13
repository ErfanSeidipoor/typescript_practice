import {  MatchData } from "./MatchData";
import { HtmlReport } from './reportTargets/HtmlReport'
import { WinsAnalysis } from './analysers/WinsAnalysis'

export interface Analyzer {
    run(matches:MatchData[]):string;
}

export interface OutputTarget {
    print(report: string):void
}

export class Summary {
    constructor(
        public analyzer: Analyzer,
        public outputTarget:OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const report = this.analyzer.run(matches)
        this.outputTarget.print(report)

    }

    static winsAnalysisWithHtmlReport(team: string) {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }
}