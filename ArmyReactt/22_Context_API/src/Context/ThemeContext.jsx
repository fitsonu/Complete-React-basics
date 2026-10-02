import {createContext} from 'react'

export const ThemeDataContext = createContext()

function ThemeContext(props){
    return(
        <div>
            <ThemeDataContext value='sonu'>
               {props.children}
            </ThemeDataContext>
           
        </div>
    )
}
export default ThemeContext