import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./App.scss";
import { BG_COLOR, PAPER_COLOR } from "./accets/app-constants";
import Layout from "./templetes/layout/layout";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const darkBlueTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#023c3e",
    },
    background: {
      default: BG_COLOR,
      paper: PAPER_COLOR,
    },
  },
});

const theme = responsiveFontSizes(darkBlueTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Layout />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
