import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./App.scss";
import { BG_COLOR, PAPER_COLOR } from "./accets/app-constants";
import Layout from "./templetes/layout/layout";
import AdminLogin from "./components/Admin/adminLogin/AdminLogin"; // Import your AdminLogin component
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Dashboard from "./components/Admin/adminDashboard/Dashboard";

const darkBlueTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
