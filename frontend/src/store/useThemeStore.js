import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("meetu-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("meetu-theme", theme);
    set({ theme });
  },
}));
