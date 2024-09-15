import { IUser } from '@/app/types';
import { create } from 'zustand';

interface State {
  user: IUser | null;
  login: (value: IUser) => void;
  logout: () => void;
}

const useStore = create<State>((set) => ({
  user: null,
  login: (user) => set(() => ({ user })),
  logout: () => set(() => ({ user: null })),
}));

export default useStore;
