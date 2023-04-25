import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.scss";
import Layout from "./templetes/layout/layout";

const darkBlueTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#0d253f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkBlueTheme}>
      <CssBaseline />
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
