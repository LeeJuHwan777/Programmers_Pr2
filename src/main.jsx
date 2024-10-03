import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import Test from "./pages/Test/Test";
// import App2 from "./pages/Test/Test2";
// import PostingSwiper from "./components/common/Swiper/Posting";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <App2 /> */}
  </StrictMode>
);

// imgPath={"/News/Blog/postingProfile.png"}
// nameStr={"이주환"}