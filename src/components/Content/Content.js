const Content = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="card col-4 mt-2">
      <img src={data.img} height={100} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <p className="card-text">
          <small className="text-muted">{data.class}</small>
        </p>
        <p>Time required: {data.duration} minutes</p>
      </div>
      <div class="card-footer bg-transparent  border-0">
        <a href="" className="btn w-100 btn align-self-end btn-primary">
          Add to list
        </a>
      </div>
    </div>
  );
};

export default Content;
