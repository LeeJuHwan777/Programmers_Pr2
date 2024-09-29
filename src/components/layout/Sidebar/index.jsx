import Logo from "../../common/Logo/index";
import Button from "../../common/button/index";
import Footer from "../Footer/index";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <Logo></Logo>
        <Button></Button>
        <Footer></Footer>
    </div>
  );
}