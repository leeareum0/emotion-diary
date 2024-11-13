import Buttom from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 11월"}
        leftChild={<Buttom text={"<"} />}
        rightChild={<Buttom text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
