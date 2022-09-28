import logo from "../../images/p-logo.jpeg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#study">
          <img src={logo} height={60} width={60} alt="" />
          Activity-For-Study
        </a>
      </div>
    </nav>
  );
};

export default Header;
