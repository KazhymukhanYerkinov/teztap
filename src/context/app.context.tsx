import React from 'react';

export interface IAppContext {

  isAuth: boolean,
  setIsAuth?: (newIsAuth: boolean) => void,

  drawer: boolean,
  deactivateDrawer?: () => void,
  activateDrawer?: () => void,

  page: number,
  handlePage?: (event: React.ChangeEvent<{}>, newPage: number) => void
}
interface IAppContextProvider {
  children: React.ReactNode
}

export const AppContext = React.createContext<IAppContext>({ isAuth: false, drawer: false, page: 0 });



export const AppContextProvider = ({ children }: IAppContextProvider): JSX.Element => {

  // drawer
  const [ drawer, setDrawer ] = React.useState<boolean>(false);
  const activateDrawer = () => {
    setDrawer(true);
  }
  const deactivateDrawer = () => {
    setDrawer(false);
  }

  // page
  const [page, setPage] = React.useState(0);
  const handlePage = (event: React.ChangeEvent<{}>, newPage: number) => {
    setPage(newPage);
  }


  // auth
  const [ isAuth, setIsAuth ] = React.useState<boolean>(true);
  const handleIsAuth = (newIsAuth: boolean) => {
    setIsAuth(newIsAuth);
  }
  
  return (
    <AppContext.Provider value = {{ isAuth, setIsAuth: handleIsAuth, drawer, activateDrawer, deactivateDrawer, page, handlePage }}>
      { children }
    </AppContext.Provider>
  )
}