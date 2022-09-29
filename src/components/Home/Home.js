import Content from "../Content/Content";
import studyData from "../../fakeData/fakeStudyData";
const Home = ({ setStudyTime }) => {
  const handleStudyTime = (time) => {
    setStudyTime(time);
  };
  return (
    <div className="container">
      <div className="row gap-4 justify-content-center">
        {studyData.map((data) => (
          <Content
            key={data.id}
            handleStudyTime={handleStudyTime}
            data={data}
          ></Content>
        ))}
      </div>
    </div>
  );
};

export default Home;
