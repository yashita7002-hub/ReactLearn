
//create context 
export const ThemeContext = createContext(
    {
        themeMode:"light",
        darkTheme:() => {

        },
        lightTheme:() => {

        },


    }
)



//Providing the context

export const ThemeProvider = ThemeContext.Provider


//using context

export default function useTheme(){
    return useContext(ThemeContext)
}