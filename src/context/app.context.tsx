import React from 'react';

export interface IAppContext {
  isAuth: boolean,
  setIsAuth?: (newIsAuth: boolean) => void,
}
interface IAppContextProvider {
  children: React.ReactNode
}

export const AppContext = React.createContext<IAppContext>({ isAuth: false });



export const AppContextProvider = ({ children }: IAppContextProvider): JSX.Element => {

  const [ isAuth, setIsAuth ] = React.useState(true);

  const handleIsAuth = (newIsAuth: boolean) => {
    setIsAuth(newIsAuth);
  }
  
  return (
    <AppContext.Provider value = {{ isAuth, setIsAuth: handleIsAuth }}>
      { children }
    </AppContext.Provider>
  )
}