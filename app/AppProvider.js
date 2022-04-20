import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";


const AppProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider >
    )
}
export default AppProvider