
import React from 'react';
import { Icon } from './Icon';

export const InitialStateCard: React.FC = () => {
  return (
    <div className="text-center p-8 bg-white dark:bg-gray-800/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <Icon name="lightbulb" className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Ready to Analyze</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Paste a news article or headline into the text box above and click "Check News" to get an AI-powered analysis.
      </p>
    </div>
  );
};
