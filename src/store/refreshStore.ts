import { create } from 'zustand'

interface RefreshState {
  isAutoRefreshEnabled: boolean
  toggleAutoRefresh: () => void
}

export const useRefreshStore = create<RefreshState>((set) => ({
  isAutoRefreshEnabled: false,
  toggleAutoRefresh: () => set((state) => ({ isAutoRefreshEnabled: !state.isAutoRefreshEnabled })),
}))
