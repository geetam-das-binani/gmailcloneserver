import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export const DrawerContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [fetchAgain, setFetchAgain] = useState(false);
  const toggleDrawer = () => setOpenDrawer((prev) => !prev);
  const toggleFetchAgain = () => setFetchAgain((prev) => !prev);
  return (
    <DrawerContext.Provider value={{ openDrawer, toggleDrawer,fetchAgain,toggleFetchAgain }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(DrawerContext);
};
