import calendarImg from "../../../../public/Sidebar/calendar.png";
import taskImg from "../../../../public/Sidebar/task.png";
import newsImg from "../../../../public/Sidebar/microscope.png";

export default function Button({ setCurrentComponent }) {

  return (
    <div className="sidebar-main">
      <button className="plan" onClick={() => setCurrentComponent("Plan")}>
        <img src={calendarImg} alt=""/>
        <p>일정 관리</p>
      </button>
      <button className="todo" onClick={() => setCurrentComponent("Todo")}>
        <img src={taskImg} className="todo-img" alt="" />
        <p>할 일</p>
      </button>
      <button className="news" onClick={() => setCurrentComponent("News")}>
        <img src={newsImg} alt="" />
        <p>새로운 뉴스</p>
      </button>
    </div>
  );
}
