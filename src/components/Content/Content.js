const Content = (props) => {
  const { data } = props;

  return (
    <div className="card col-xs-12 col-sm-12 col-md-3 mt-2  p-2">
      <div className="p-4">
        <img src={data.img} height={100} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">{data.titile}</h3>
          <p className="card-text">{data.description}</p>
          <p className="card-text">
            <small className="text-muted">{data.class}</small>
          </p>

          <p>Time required: {data.duration} minutes</p>
        </div>
        <div className="card-footer bg-transparent  border-0">
          <a
            className="btn w-100 btn align-self-end btn-success"
            onClick={() => props.handleStudyTime(data.duration)}
          >
            Add to list
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
