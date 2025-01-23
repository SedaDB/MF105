import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "./store/MyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode >
    <ThemeProvider>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </StrictMode>
);
