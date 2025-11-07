import { create } from 'zustand';

type AdminView = 'table' | 'form';

interface AdminViewState {
    currentView: AdminView;
    setCurrentView: (view: AdminView) => void;
    toggleView: () => void;
}

const useAdminViewStore = create<AdminViewState>((set) => ({
    currentView: 'table',
    setCurrentView: (view) => set({ currentView: view }),
    toggleView: () => set((state) => ({
        currentView: state.currentView === 'table' ? 'form' : 'table'
    })),
}));

export { useAdminViewStore };