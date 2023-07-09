import { create } from 'zustand'

interface UseMenuStateProps {
  isOpen: boolean
  setMenuState: (value: boolean) => void
}

export const useMenuState = create<UseMenuStateProps>((set) => ({
  isOpen: false,
  setMenuState: (value: boolean) => set({ isOpen: value }),
}))
