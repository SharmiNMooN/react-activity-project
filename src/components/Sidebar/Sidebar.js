import logo from "../../images/logo.jpeg";

const Sidebar = (props) => {
  return (
    <div className="card border-0 mt-2">
      <div className="row">
        <div className="col-4">
          <img src={logo} height={100} width={100} alt="" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title fw-bold">Sharmin Akter</h5>
            <p className="card-text">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
