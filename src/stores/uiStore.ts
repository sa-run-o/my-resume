import { create } from "zustand";

interface UiStoreState {
  isPageLoading: boolean;
  turnOnPageLoading: () => void;
  turnOffPageLoading: () => void;
  turnPageLoadingBySec: (sec: number) => void;
}

const uiStore = create<UiStoreState>((set) => ({
  isPageLoading: false,
  turnOnPageLoading: () => set(() => ({ isPageLoading: true })),
  turnOffPageLoading: () => set(() => ({ isPageLoading: false })),
  turnPageLoadingBySec: (sec) =>
    set((state) => {
      state.turnOnPageLoading();
      setTimeout(() => {
        state.turnOffPageLoading();
      }, sec * 1000);
      return {};
    }),
}));

export default uiStore;
