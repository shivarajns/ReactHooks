import { useContext } from "react";
import { ThemeContext} from './themeProvider'

function ThemeButton() {
    const {theme, toggle} = useContext(ThemeContext)

    return(
        <button
        onClick={toggle}
        style={{background: theme=== 'light'? '#fff':'#000',
            color: theme=== 'light' ? '#000':'#fff'
        }}
        
        >
            Current Theme: {theme}
        </button>
    )

}
export default ThemeButton;
