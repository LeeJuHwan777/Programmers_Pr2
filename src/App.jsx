import "./App.css";
import Sidebar from "./components/layout/Sidebar/index";
import Plan from "./components/layout/Plan/index";
// import News from "./components/layout/News/index";
// import Todo from "./components/layout/Todo/index";

function App() {
  return (
    <>
      <div className="mainHomepage">
        <Sidebar>
        </Sidebar>
        <Plan></Plan>
        {/* <Todo></Todo>
        <News></News> */}
      </div>
    </>
  );
}

export default App;
