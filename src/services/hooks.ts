import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

interface User {
  email: string;
  password: string;
}

export interface AuthContext {
  currentUser: User | null;
  loading: boolean;
  login?: (email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
  signup?: (email: string, password: string) => Promise<void>;
  resetPassword?: (email: string) => Promise<void>;
  addUserDetails?: (
    user: User,
    name: string,
    imageUrl: string
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContext>("app-context");

export const Parent = component$(() => {
  const state = useStore<AuthContext>({
    currentUser: null,
    loading: false,
  });

  useContextProvider(AuthContext, state); // type checker will ensure the second param is SharedState

  return null;
});
