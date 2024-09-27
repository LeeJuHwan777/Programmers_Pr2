// FullCalendar -> https://velog.io/@youjunho613/FullCalendar-library
import "./App.css";
import logoImg from "./img/logo.svg";
import calendarImg from "./img/calendar.png";
import taskImg from "./img/task.png";
import newsImg from "./img/microscope.png";
import githubImg from "./img/github.png";
import mailImg from "./img/mail.png";

// import { useState } from "react";

// Toast 창
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Plan from "./pages/Plan";
// import Todo from "./pages/Todo";
// import News from "./pages/News";

function App() {
  // toast 구현 -> https://kangminhyuk1111.tistory.com/51
  const notify = () => toast("메일이 복사 되었습니다.");

  // const [viewCalendar, setViewCalendar] = useState(true);

  const Todo = () => {
    <Todo></Todo>
  };

  return (
    <>
      <div className="mainHomepage">
        <div className="sidebar">
          <div className="sidebar-img">
            <a href="#">
              <img src={logoImg} alt="" />
            </a>
          </div>
          <div className="sidebar-main">
            <button className="plan">
              <img src={calendarImg} alt="" />
              <p>일정 관리</p>
            </button>
            <button className="todo">
            {/* onClick={() => setViewCalendar(true)} */}
              <img src={taskImg} className="todo-img" alt="" />
              <p>할 일</p>
            </button>
            <button className="news">
              <img src={newsImg} alt="" />
              <p>새로운 뉴스</p>
            </button>
          </div>
          <div className="sidebar-footer">
            <div className="Sfooter-icon">
              <a href="https://github.com/hwanza">
                <img src={githubImg} className="github" alt="" />
              </a>
              <button onClick={notify}>
                <img src={mailImg} className="mail" alt="" />
              </button>
              <ToastContainer />
            </div>
            <p className="Sfooter-copyright">
              copyrightⓒ 2024 All rights reserved
            </p>
          </div>
        </div>
        <div className="Plan">
          .<Plan></Plan>
        </div>

        {/* <div className="Todo">
          .
          <Todo></Todo>
        </div> */}

        {/* <div className="News">
          .
          <News></News>
        </div> */}
      </div>
    </>
  );
}

export default App;
