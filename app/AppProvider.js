import { ThemeProvider } from "styled-components";
import Layout from "../share/components/Layout/Layout";
import { theme } from "../styles/theme";
import { store } from "../store/store";
import { Provider } from "react-redux";

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </Provider>
  );
};
export default AppProvider;
