import logo from "../../images/logo.jpeg";

const Sidebar = (props) => {
  const breakTime = [10, 20, 30, 40, 50];
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

      <div className="mt-4">
        <h5>Add A Break</h5>
        <div className="row bg-secondary rounded">
          {breakTime.map((item) => (
            <div className="col-2 p-2">
              <div className=" rounded-circle text-center fw-bold">
                <a className="btn btn-rounded rounded-circle text-center bg-white">
                  {item}m
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
