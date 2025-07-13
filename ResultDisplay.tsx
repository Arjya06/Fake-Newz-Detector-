
import React from 'react';
import { Classification } from '../types';
import type { AnalysisResult } from '../types';
import { Icon } from './Icon';

interface ResultDisplayProps {
  result: AnalysisResult;
}

const getClassificationStyles = (classification: Classification) => {
  switch (classification) {
    case Classification.FAKE:
      return {
        bgColor: 'bg-red-100 dark:bg-red-900/30',
        textColor: 'text-red-800 dark:text-red-200',
        borderColor: 'border-red-500 dark:border-red-600',
        icon: <Icon name="alert" className="w-8 h-8" />,
        title: "This news looks FAKE"
      };
    case Classification.REAL:
      return {
        bgColor: 'bg-green-100 dark:bg-green-900/30',
        textColor: 'text-green-800 dark:text-green-200',
        borderColor: 'border-green-500 dark:border-green-600',
        icon: <Icon name="check" className="w-8 h-8" />,
        title: "This news seems REAL"
      };
    case Classification.UNCERTAIN:
      return {
        bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
        textColor: 'text-yellow-800 dark:text-yellow-200',
        borderColor: 'border-yellow-500 dark:border-yellow-600',
        icon: <Icon name="question" className="w-8 h-8" />,
        title: "Analysis is UNCERTAIN"
      };
    default:
        return {
            bgColor: 'bg-gray-100 dark:bg-gray-700',
            textColor: 'text-gray-800 dark:text-gray-200',
            borderColor: 'border-gray-500',
            icon: <Icon name="question" className="w-8 h-8" />,
            title: "Analysis Result"
        };
  }
};

const ConfidenceBar: React.FC<{ score: number, color: string }> = ({ score, color }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${score * 100}%` }}></div>
    </div>
);

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const styles = getClassificationStyles(result.classification);
  const confidenceColor = result.classification === Classification.FAKE ? 'bg-red-500' : result.classification === Classification.REAL ? 'bg-green-500' : 'bg-yellow-500';

  return (
    <div className={`p-6 rounded-xl shadow-lg border-2 ${styles.borderColor} ${styles.bgColor} animate-fade-in`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className={`p-3 rounded-full ${styles.textColor} ${styles.bgColor}`}>
          {styles.icon}
        </div>
        <div>
          <h2 className={`text-2xl font-bold ${styles.textColor}`}>{styles.title}</h2>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Confidence:</span>
            <ConfidenceBar score={result.confidence_score} color={confidenceColor} />
            <span className={`text-sm font-bold ${styles.textColor}`}>
              {Math.round(result.confidence_score * 100)}%
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
            <Icon name="info" className="w-5 h-5" />
            AI Reasoning
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{result.reasoning}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
            <Icon name="tag" className="w-5 h-5" />
            Key Indicators
          </h3>
          <div className="flex flex-wrap gap-2">
            {result.key_indicators.map((indicator, index) => (
              <span key={index} className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                {indicator}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
