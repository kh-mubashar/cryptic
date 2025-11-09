'use client';

import { useRefreshStore } from '@/store/refreshStore';

export const AutoRefreshToggle = () => {
  const { isAutoRefreshEnabled, toggleAutoRefresh } = useRefreshStore();

  return (
    <div className="flex items-center gap-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isAutoRefreshEnabled}
          onChange={toggleAutoRefresh}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
      <span className="text-sm font-medium text-gray-900">Auto Refresh</span>
    </div>
  );
};
