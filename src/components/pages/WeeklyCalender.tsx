import React, { useState } from "react";
import { endOfWeek, format, startOfMonth, endOfMonth, startOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";

import styled from "styled-components";
import { addWeeks, subWeeks } from "date-fns/esm";

interface renderType {
  currentMonth: Date;
  preveWeek: React.MouseEventHandler<HTMLSpanElement>;
  nextWeek: React.MouseEventHandler<HTMLSpanElement>;
}

interface renderType2 {
  currentMonth: Date;
  currentDate: Date;
  selectedDate: Date;
  onDateClick: React.MouseEventHandler<HTMLDivElement>;
  //매개변수 day 의 타입을 어떻게 지정해야할지 잘 모르겠다...그래서 일단 any로 해둠
}

const RenderHeader = ({ currentMonth, preveWeek, nextWeek }: renderType) => {
  return (
    <CalenderHeader>
      <div className="col">
        <div className="text">
          <span>{format(currentMonth, "M")}월</span>
          {format(currentMonth, "yyyy")}
        </div>
      </div>
      <div className="btnArea">
        <span onClick={preveWeek}>전주</span>
        <span onClick={nextWeek}>차주</span>
      </div>
    </CalenderHeader>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < 7; i++) {
    days.push(<div key={i}>{date[i]}</div>);
  }
  return <CalenderWeek>{days}</CalenderWeek>;
};

const RenderCells = ({ currentMonth, currentDate, selectedDate, onDateClick }: renderType2) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days: any = [];
  let day: any = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className={format(currentMonth, "M") !== format(day, "M") ? "text not-valid" : ""}>
            {formattedDate}
          </span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(<CalenderCells key={day}>{days}</CalenderCells>);
    days = [];
  }
  return <CalenderCells key={day}>{days}</CalenderCells>;
};

const WeeklyCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(
    new Date(currentMonth.getFullYear(), currentMonth.getMonth(), currentMonth.getDate()),
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

  const preveWeek = () => {
    setCurrentDate(subWeeks(currentDate, 7));
  };
  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 7));
  };
  const onDateClick = (day: any) => {
    setSelectedDate(day);
  };
  return (
    <CalenderWrap>
      <RenderHeader currentMonth={currentMonth} preveWeek={preveWeek} nextWeek={nextWeek} />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        currentDate={currentDate}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </CalenderWrap>
  );
};

export default WeeklyCalender;

const CalenderWrap = styled.div`
  width: 100%;
`;

const CalenderHeader = styled.div`
  background-color: #eeeeee;
  color: #4e4e4e;
  padding: 12px 24px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .text > span {
    font-weight: 800;
    font-size: 25px;
    padding: 0.5rem;
  }
  .btnArea {
    display: flex;
    justify-content: space-around;
    width: 13%;
  }
`;
const CalenderWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: aliceblue;
  text-align: center;
  height: 39px;
  line-height: 39px;
`;
const CalenderCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  margin: 1rem;
  place-items: center;
  text-align: center;
  color: #7e7e83;
  div:nth-child(1) {
    color: #ff00b7d9;
  }
  div:nth-child(7) {
    color: #4139e0;
  }
  div {
    width: 100%;
    height: 3rem;
    padding: 7%;
    margin: 0.5rem 0;
    line-height: 2.9rem;
    vertical-align: middle;
    cursor: pointer;
  }
  .disabled {
    visibility: hidden;
  }
  .selected {
    width: 3rem;
    height: 3rem;
    background-color: #d745ff;
    border-radius: 50%;
    color: #fff;
  }
`;
