import "./Todo.css";
export default function Todo () {
  return (
    <div className="TodoList-box1">
      <div className="TodoList-box2">
        <div className="Todo-main">
          <h1>ToDoList</h1>
          <div className="Todo-component1">
            <input type="text" placeholder="할 일을 입력하세요"/>
            <button className="Todo-plusBtn">+</button>
          </div>
          <div className="Todo-component2">
            <input type="checkbox"/>
            <p>완료된 내역 포함</p>
          </div>
        </div>
      </div>
    </div>
  );
};