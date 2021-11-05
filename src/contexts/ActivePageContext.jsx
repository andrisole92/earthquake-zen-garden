import * as React from 'react';
import { useContext, useState, useCallback, useEffect } from 'react';

const ACTIVE_PAGE_URL_KEY = 'activePage';

const ActivePageContext = React.createContext();

export function ActivePageContextProvider({ children }) {
  const [activePage, setActivePage] = useState(null);

  const setActivePageWrapper = useCallback((pageName) => {
    setActivePage(pageName);
    const params = new URLSearchParams();
    params.set(ACTIVE_PAGE_URL_KEY, pageName);
    if ('history' in window) {
      history.replaceState({}, '', '/?' + params.toString());
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search.substring(1));
    const localActivePage = params.get(ACTIVE_PAGE_URL_KEY);
    if (localActivePage != null) {
      setActivePage(localActivePage);
    }
  }, []);

  return (
    <ActivePageContext.Provider
      value={{ activePage, setActivePage: setActivePageWrapper }}>
      {children}
    </ActivePageContext.Provider>
  );
}

export function useActivePageContext() {
  const context = useContext(ActivePageContext);
  if (context == null) {
    throw new Error(
      'useActivePageContext should be used within ActivePageContextProvider'
    );
  }
  return context;
}
