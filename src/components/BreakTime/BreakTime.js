const BreakTime = (props) => {
  const { breakTime } = props;
  return (
    <div className="col-2 p-2">
      <div className=" rounded-circle text-center fw-bold">
        <a
          className="btn btn-rounded rounded-circle text-center bg-white"
          onClick={() => props.handleBreakTime(breakTime)}
        >
          {breakTime}m
        </a>
      </div>
    </div>
  );
};

export default BreakTime;
