'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface RefreshTimerProps {
  interval: number;
  onRefresh: () => Promise<void>;
  isLoading: boolean;
}

type IntervalOption = {
  label: string;
  value: number;
};

const INTERVALS: IntervalOption[] = [
  { label: '30 seconds', value: 30000 },
  { label: '1 minute', value: 60000 },
  { label: '5 minutes', value: 300000 },
  { label: '15 minutes', value: 900000 },
];

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes > 0
    ? `${minutes}m ${remainingSeconds}s`
    : `${remainingSeconds}s`;
};

export const RefreshTimer = ({
  interval: defaultInterval,
  onRefresh,
  isLoading,
}: RefreshTimerProps) => {
  const savedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [currentInterval, setCurrentInterval] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cryptic-refresh-interval');
      return saved ? parseInt(saved, 10) : defaultInterval;
    }
    return defaultInterval;
  });

  const [timeUntilRefresh, setTimeUntilRefresh] = useState(
    currentInterval / 1000
  );
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cryptic-auto-refresh');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [showSaved, setShowSaved] = useState(false);

  const showSavedIndicator = useCallback(() => {
    setShowSaved(true);
    if (savedTimeoutRef.current) {
      clearTimeout(savedTimeoutRef.current);
    }
    savedTimeoutRef.current = setTimeout(() => setShowSaved(false), 2000);
  }, []);

  const handleRefresh = useCallback(async () => {
    await onRefresh();
    setTimeUntilRefresh(currentInterval / 1000);
  }, [currentInterval, onRefresh]);

  const handleIntervalChange = useCallback(
    (newInterval: number) => {
      setCurrentInterval(newInterval);
      localStorage.setItem('cryptic-refresh-interval', String(newInterval));
      setTimeUntilRefresh(newInterval / 1000);
      showSavedIndicator();
    },
    [showSavedIndicator]
  );

  const handleAutoRefreshToggle = useCallback(
    (enabled: boolean) => {
      setAutoRefreshEnabled(enabled);
      localStorage.setItem('cryptic-auto-refresh', JSON.stringify(enabled));
      setTimeUntilRefresh(currentInterval / 1000);
      showSavedIndicator();
    },
    [currentInterval, showSavedIndicator]
  );

  // Auto-refresh countdown
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (autoRefreshEnabled && !isLoading) {
      timerRef.current = setInterval(() => {
        setTimeUntilRefresh((prev) => {
          if (prev <= 1) {
            handleRefresh();
            return currentInterval / 1000;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoRefreshEnabled, isLoading, currentInterval, handleRefresh]);

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={autoRefreshEnabled}
              onChange={(e) => handleAutoRefreshToggle(e.target.checked)}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="text-sm text-gray-600">Auto-refresh</span>
          </label>
          <select
            value={currentInterval}
            onChange={(e) => handleIntervalChange(Number(e.target.value))}
            className="form-select rounded-md border-gray-300 text-sm text-gray-600"
            disabled={!autoRefreshEnabled}
            aria-label="Refresh interval"
          >
            {INTERVALS.map((interval) => (
              <option key={interval.value} value={interval.value}>
                {interval.label}
              </option>
            ))}
          </select>
        </div>
        {autoRefreshEnabled && (
          <span className="text-sm text-gray-500">
            {isLoading
              ? 'Refreshing...'
              : `Next refresh in ${formatTime(timeUntilRefresh)}`}
          </span>
        )}
        {showSaved && (
          <span className="animate-fade-in text-sm text-green-600">
            Preferences saved
          </span>
        )}
      </div>
      <button
        onClick={handleRefresh}
        className="p-2 text-gray-400 transition-colors hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLoading}
        title="Refresh now"
      >
        <span className={`inline-block ${isLoading ? 'animate-spin' : ''}`}>
          🔄
        </span>
      </button>
    </div>
  );
};
