import { createContext } from '@builder.io/qwik';

export interface AppContext {
  // ...
}

export const AppContext = createContext<AppContext>('app-context');
