import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { produce } from 'immer';
import create from 'zustand';

import { User } from '@/types/auth';

type AuthStoreType = {
  user: User | null;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  stopLoading: () => void;
};

const useAuthStoreBase = create<AuthStoreType>((set) => ({
  user: null,
  token: '',
  isAuthenticated: false,
  isLoading: true,
  login: (user, token) => {
    localStorage.setItem('token', token);
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = true;
        state.user = user;
        state.token = token;
      })
    );
  },
  logout: () => {
    localStorage.removeItem('token');
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
    );
  },
  stopLoading: () => {
    set(
      produce<AuthStoreType>((state) => {
        state.isLoading = false;
      })
    );
  },
}));

const useAuthStore = createSelectorHooks(useAuthStoreBase);

export default useAuthStore;
