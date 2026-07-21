import { createContext, useContext } from "react";


//creating a CONTEXT
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})


//Creating CONTEXT PROVIDER
export const ThemeProvider = ThemeContext.Provider

//Using CONTEXT
export default function useTheme(){
    return useContext(ThemeContext)
}

/* 










*/