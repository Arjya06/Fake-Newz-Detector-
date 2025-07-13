
import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
            <Icon name="testTube" className="w-8 h-8 text-blue-500 dark:text-blue-400" />
        </div>
        <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight">
                Fake News Detector
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Using AI to analyze news for signs of misinformation.
            </p>
        </div>
      </div>
    </header>
  );
};
