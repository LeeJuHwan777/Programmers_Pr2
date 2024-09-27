import calendarImg from "../../../../public/calendar.png";
import taskImg from "../../../../public/task.png";
import newsImg from "../../../../public/microscope.png";
import { useState } from "react";

export default function Button() {
  const [setCurrentComponent] = useState("Plan");

  return (
    <div className="sidebar-main">
      <button className="plan" onClick={() => setCurrentComponent("Plan")}>
        <img src={calendarImg} alt=""/>
        <p>일정 관리</p>
      </button>
      <button className="todo" onClick={() => setCurrentComponent("Todo")}>
        {/* onClick={() => setViewCalendar(true)} */}
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
