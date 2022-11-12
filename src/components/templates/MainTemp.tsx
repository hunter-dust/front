import { useState } from "react";
import Monthly from "../UI/molecules/MonthlyCalendar";
import Weekly from "../UI/molecules/WeeklyCalendar";
import ListBox from "../UI/molecules/ListBox";

import styled from "styled-components";

const MainTemp = () => {
  const [mode, setMode] = useState<String>("monthly");

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

export default MainTemp;

const MainWrap = styled.div``;
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
