import Button from "../../common/Button";
import Logo from "../../common/Logo/index";
import Footer from "../Footer/index";
import "./sidebar.css";

export default function Sidebar({ setCurrentComponent }) {
  return (
    <div className="sidebar">
        <Logo />
        <Button setCurrentComponent={setCurrentComponent} />
        <Footer />
    </div>
  );
}