import logo from "../../images/main-logo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg h-bg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder" href="#study">
          <img src={logo} height={60} width={60} alt="" />
          <span className="px-5">Activity-For-Study</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
