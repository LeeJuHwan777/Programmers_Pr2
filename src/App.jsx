import Sidebar from "./components/layout/Sidebar/index";
import Plan from "./components/layout/Plan/index";
import News from "./components/layout/News/index";
import Todo from "./components/layout/Todo/index";
import { useState } from "react";

function App() {
  const [currentComponent, setCurrentComponent] = useState("Plan");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Plan":
        return <Plan />;
      case "Todo":
        return <Todo />;
      case "News":
        return <News />;
    }
  };

  return (
    <>
      <div className="mainHomepage">
        <Sidebar setCurrentComponent={setCurrentComponent} />
        {renderComponent()}
      </div>
    </>
  );
}

export default App;
