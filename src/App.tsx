import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
function App() {
  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  );
}

export default App;
