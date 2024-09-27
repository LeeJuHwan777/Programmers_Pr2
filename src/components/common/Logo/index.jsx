import logoImg from "../../../../public/logo.svg";

export default function Logo() {
  return (
    <div className="sidebar-img">
      <a href="#">
        <img src={logoImg} alt="" />
      </a>
    </div>
  );
}
