import { useState } from "react";
import Monthly from "./MonthlyCalender";
import Weekly from "./WeeklyCalender";
import ListBox from "components/UI/molecules/ListBox";
import styled from "styled-components";

const Main = () => {
  const [mode, setMode] = useState<String>();

  const onChangeMode = (type: String) => {
    setMode(type);
  };

  return (
    <MainWrap>
      <MainBtnWrap>
        <Btn className={`btn ${mode === "monthly" ? "active" : "none_active"}`} onClick={() => onChangeMode("monthly")}>
          월간
        </Btn>
        <Btn className={`btn ${mode === "weekly" ? "active" : "none_active"}`} onClick={() => onChangeMode("weekly")}>
          주간
        </Btn>
      </MainBtnWrap>
      <div>{mode === "monthly" ? <Monthly /> : <Weekly />}</div>
      <ListBox />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 375px;
  height: 667px;
  background-color: #fbe8e8;
  margin: 2rem auto;
  overflow: scroll;
  border-radius: 2rem;
`;
const MainBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem;
  .active {
    background-color: #6ba6db;
  }
`;
const Btn = styled.button`
  border: none;
  background-color: #7bbdf7;
  padding: 1rem;
`;
