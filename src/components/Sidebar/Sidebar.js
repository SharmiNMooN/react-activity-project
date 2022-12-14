import { useEffect, useState } from "react";
import logo from "../../images/logo.jpeg";
import BreakTime from "../BreakTime/BreakTime";

import "./Sidebar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = (props) => {
  const _breakTime = [10, 20, 30, 40, 50];
  const [breakTime, setBreakTime] = useState(0);
  const [studyTime, setStudyTime] = useState(0);

  const _studyTime = localStorage.getItem("studyTime");

  if (!_studyTime) {
    setStudyTime(props.studyTime);
    localStorage.setItem("studyTime", studyTime);
  }

  const notify = () => {
    toast("🎉 Congrats!! You have completed your study!!", {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const bTime = localStorage.getItem("breakTime");
    if (bTime) {
      setBreakTime(bTime);
    }

    if (!_studyTime) {
      setStudyTime(props.studyTime);
      localStorage.setItem("studyTime", studyTime);
    } else {
      localStorage.setItem("studyTime", Number(_studyTime) + props.studyTime);
      setStudyTime(Number(_studyTime) + props.studyTime);
    }
  }, []);

  const handleBreakTime = (time) => {
    localStorage.setItem("breakTime", time);
    setBreakTime(time);
  };

  return (
    <div className="container  mt-2">
      <div className="card border-0">
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
        <div className="row sidebar-content-bg mt-4 rounded text-white">
          <div className="col-4">
            <h5>55kg</h5>
            <p>Weight</p>
          </div>
          <div className="col-4 ">
            <h5>5'2"</h5>
            <p>Height</p>
          </div>
          <div className="col-4 ">
            <h5>Dhaka</h5>
            <p>Division</p>
          </div>
        </div>

        <div className="mt-5">
          <h5>Add A Break</h5>
          <div className="row sidebar-content-bg gap-2 rounded">
            {_breakTime.map((item) => (
              <BreakTime
                key={item}
                breakTime={item}
                handleBreakTime={handleBreakTime}
              ></BreakTime>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h5>Study Details</h5>
          <div className="row sidebar-content-bg text-white rounded">
            <div className="col-12 row">
              <div className="col-6">Study time:</div>
              <div className="col-6 ">{studyTime} minutes</div>
            </div>
            <div className="col-12 row">
              <div className="col-6">Break time:</div>
              <div className="col-6 ">{breakTime} minutes</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="card-footer bg-transparent  border-0 d-grid gap-2">
            <button
              className="btn w-100 btn align-self-end btn-lg btn-warning"
              onClick={notify}
            >
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              Activity Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
