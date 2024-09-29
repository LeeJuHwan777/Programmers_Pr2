import "./App.css";
import Sidebar from "./components/layout/Sidebar/index";
// import { useState } from "react";

import Plan from "./components/layout/Plan/index";
// import Plan from "./pages/Plan";
// import Todo from "./pages/Todo";
// import News from "./pages/News";

function App() {
  // const [currentComponent] = useState("Plan");

  return (
    <>
      <div className="mainHomepage">
        <Sidebar>
          {/* <div className="content">
            <div className="Plan">
              {currentComponent === "Plan" && <Plan />}
            </div>
            <div className="Todo">
              {currentComponent === "Todo" && <Todo />}
            </div>
            <div className="News">
              {currentComponent === "News" && <News />}
            </div>
          </div> */}
        </Sidebar>
        <Plan></Plan>
        {/* <Todo></Todo> */}
        {/* <News></News> */}

        {/* <Plan></Plan>
        <Todo></Todo> */}
      </div>
    </>
  );
}

export default App;
