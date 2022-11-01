import Router from "routes/Router";
import { Provider } from "react-redux";
import { store } from "redux/store/configStore";

import { GlobalStyles } from "utils/styles/globalStyles";
import { theme } from "utils/styles/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
