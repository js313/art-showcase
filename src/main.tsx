import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GalleryProvider } from "./providers/GalleryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryProvider>
        <App />
      </GalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
