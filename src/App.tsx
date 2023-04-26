import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.scss";
import { BG_COLOR } from "./accets/app-constants";
import Layout from "./templetes/layout/layout";

const darkBlueTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#023c3e",
    },
    background: {
      default: BG_COLOR,
      paper: "#023c3e",
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
