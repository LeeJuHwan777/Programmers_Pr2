// Toast 창
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import githubImg from "../../../../public/Sidebar/github.png";
import mailImg from "../../../../public/Sidebar/mail.png";

export default function Footer() {

  // toast 구현 -> https://kangminhyuk1111.tistory.com/51
  const notify = () => toast("메일이 복사 되었습니다.");
  return (
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
      <p className="Sfooter-copyright">copyrightⓒ 2024 All rights reserved</p>
    </div>
  );
}
