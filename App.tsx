import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { NewsInput } from './components/NewsInput';
import { ResultDisplay } from './components/ResultDisplay';
import { analyzeNews } from './services/geminiService';
import type { AnalysisResult } from './types';
import { InitialStateCard } from './components/InitialStateCard';
import { debounce } from 'lodash'; // Import debounce from lodash

const App: React.FC = () => {
  const [newsText, setNewsText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyze = async (text: string) => {
      if (!text.trim()) {
          setError('Please enter some news text to analyze.');
          return;
      }

      if (text.trim().length < 10) {
          setError('Please enter more than 10 characters to analyze.');
          return;
      }

      setIsLoading(true);
      setError(null);
      setResult(null);

      try {
          const analysis = await analyzeNews(text);
          setResult(analysis);
      } catch (err) {
          console.error(err);
          setError('Failed to analyze the news. The API might be busy or an error occurred. Please try again later.');
      } finally {
          setIsLoading(false);
      }
  };

  // Debounce the analyze function to prevent rapid API calls
  const debouncedAnalyze = useCallback(
      debounce(analyze, 500), // Adjust the delay (in milliseconds) as needed
      []
  );

  const handleAnalyze = useCallback(() => {
      debouncedAnalyze(newsText);
  }, [newsText, debouncedAnalyze]);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          <NewsInput
            newsText={newsText}
            setNewsText={setNewsText}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
          />
          
          {error && (
            <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          )}

          <div className="mt-6">
            {!isLoading && !result && <InitialStateCard />}
            {isLoading && (
              <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Analyzing news...</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Our AI is fact-checking, please wait.</p>
              </div>
            )}
            {result && !isLoading && <ResultDisplay result={result} />}
          </div>
        </main>
        <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>Powered by Google's Gemini API. This analysis is for informational purposes and is not a guarantee of truth or falsehood.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
