import { ThemeProvider } from "styled-components";
import Layout from "../share/components/Layout/Layout";
import { theme } from "../styles/theme";


const AppProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                {children}
            </Layout>

        </ThemeProvider >
    )
}
export default AppProvider