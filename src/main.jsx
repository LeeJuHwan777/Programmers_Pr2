import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// imgPath={"/News/Blog/postingProfile.png"}
// nameStr={"이주환"}