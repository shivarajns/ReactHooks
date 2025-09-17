
import {createContext, useState} from 'react'
export const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const toggle =()=> {
        setTheme(theme === 'light' ? 'dark':'light')
    }

    return(
        <ThemeContext.Provider value={{theme, toggle}}>
                {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider