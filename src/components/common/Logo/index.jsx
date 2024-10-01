const imgPath = "/Sidebar/logo.svg"
export default function Logo() {
  return (
    <div className="sidebar-img">
      <a href="#">
        <img src={imgPath} alt="" />
      </a>
    </div>
  );
}
