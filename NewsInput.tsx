
import React from 'react';
import { Icon } from './Icon';

interface NewsInputProps {
  newsText: string;
  setNewsText: (text: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

export const NewsInput: React.FC<NewsInputProps> = ({ newsText, setNewsText, onAnalyze, isLoading }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <label htmlFor="news-input" className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Enter a news article or headline
      </label>
      <textarea
        id="news-input"
        value={newsText}
        onChange={(e) => setNewsText(e.target.value)}
        placeholder="Paste the news text here..."
        className="w-full h-48 p-4 bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-y"
        disabled={isLoading}
      />
      <div className="mt-4 flex justify-end">
        <button
          onClick={onAnalyze}
          disabled={isLoading || !newsText.trim()}
          className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 disabled:scale-100"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Icon name="search" className="w-5 h-5" />
              <span>Check News</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
