import { useState, useContext } from "react";
import Buttom from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Buttom onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Buttom onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
