import Content from "../Content/Content";
import studyData from "../../fakeData/fakeStudyData";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {studyData.map((data) => (
          <Content key={data.id} data={data}></Content>
        ))}
      </div>
    </div>
  );
};

export default Home;
