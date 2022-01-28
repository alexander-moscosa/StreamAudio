import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

export interface iSteamAudioState {
  isLoggedIn: boolean;
  loading: boolean;
  data: any;
  isLoggingIn: boolean;
}

export interface iSteamAudioContext extends iSteamAudioState {
  dispatch: React.Dispatch<SteamAudioAction>;
}

export interface SteamAudioContextProviderProps {
  children: React.ReactNode;
}

export const SteamAudioContext = createContext<iSteamAudioContext>(
  {} as iSteamAudioContext,
);

const initial_state: iSteamAudioState = {
  isLoggedIn: false,
  loading: false,
  data: null,
  isLoggingIn: false,
};

export enum StateActions {
  LOGGED_IN = 1,
  LOADING,
  SET_DATA,
  LOG_OUT,
  LOGGING_IN,
}

type Payload = {
  value?: boolean | any;
};

type SteamAudioAction = { type: StateActions; payload: Payload };

type SteamAudioReducer = React.Reducer<iSteamAudioState, SteamAudioAction>;

function reducer(
  prevState: iSteamAudioState,
  action: SteamAudioAction,
): iSteamAudioState {
  switch (action.type) {
    case StateActions.LOGGED_IN:
      return {
        ...prevState,
        isLoggedIn: true,
      };
    case StateActions.LOADING:
      return {
        ...prevState,
        loading: action.payload.value,
      };
    case StateActions.SET_DATA:
      return {
        ...prevState,
        data: action.payload.value,
      };
    case StateActions.LOG_OUT:
      return {
        ...prevState,
        data: null,
        isLoggedIn: false,
      };
    case StateActions.LOGGING_IN:
      return {
        ...prevState,
        isLoggingIn: action.payload.value,
      };
    default:
      return prevState;
  }
}

function setLocalStorage<T>(name: string, data: T) {

  const stringifiedData = JSON.stringify(data);

  if(stringifiedData === JSON.stringify(initial_state)) {
    console.log('es igual');
    return;
  }

  localStorage.setItem(name, JSON.stringify(data));
}

function getLocalStorage(name: string) {
  const data = localStorage.getItem(name);

  if (data) {
    return JSON.parse(data) as iSteamAudioState;
  }

  return null;
}

export default function SteamAudioProvider(
  props: SteamAudioContextProviderProps,
) {
  const [applicationState, setApplicationState] = useReducer<SteamAudioReducer>(
    reducer,
    getLocalStorage('steamAudioState') || initial_state,
  );

  useEffect(() => {
    setLocalStorage('steamAudioState', applicationState);
  }, [applicationState]);

  return (
    <SteamAudioContext.Provider
      value={{
        dispatch: setApplicationState,
        ...applicationState,
      }}
    >
      {props.children}
    </SteamAudioContext.Provider>
  );
}

export function useSteamAudioContext() {
  const context = useContext(SteamAudioContext);
  return context;
}
