
export enum Classification {
    FAKE = 'FAKE',
    REAL = 'REAL',
    UNCERTAIN = 'UNCERTAIN',
}

export interface AnalysisResult {
    classification: Classification;
    confidence_score: number;
    reasoning: string;
    key_indicators: string[];
}
