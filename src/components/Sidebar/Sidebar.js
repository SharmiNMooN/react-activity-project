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
      <div className="row bg-secondary rounded text-white">
        <div className="col-4">
          <h5>55kg</h5>
          <p>Weight</p>
        </div>
        <div className="col-4 ">
          <h5>5'4"</h5>
          <p>Height</p>
        </div>
        <div className="col-4 ">
          <h5>Dhaka</h5>
          <p>Division</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
