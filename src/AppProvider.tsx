import { createContext, useState, useEffect, useCallback } from 'react';
import request from './request';
import { AppContextType, ApiResponse, StateUpdate } from './types';

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<ApiResponse>({});

  const handleStateUpdate = useCallback((state: StateUpdate) => {
    setIsFetching(state.isFetching);
    setData(state.data);
  }, []);

  const pageLoader = useCallback((page: number) => {
    request(page, handleStateUpdate);
  }, [handleStateUpdate]);

  useEffect(() => {
    request(1, handleStateUpdate);
  }, [handleStateUpdate]);

  return (
    <AppContext.Provider value={{ isFetching, data, pageLoader }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
