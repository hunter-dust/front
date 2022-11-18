import React, { useState } from "react";
import { addMonths, format, startOfWeek, lastDayOfWeek, subMonths, getWeek } from "date-fns";
import { isSameDay, addDays } from "date-fns";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { addWeeks, subWeeks } from "date-fns/esm";

interface renderType {
  currentMonth: Date;
  preveMonth: React.MouseEventHandler<HTMLSpanElement>;
  nextMonth: React.MouseEventHandler<HTMLSpanElement>;
}

interface renderType2 {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: React.MouseEventHandler<HTMLDivElement>;
  //매개변수 day 의 타입을 어떻게 지정해야할지 잘 모르겠다...그래서 일단 any로 해둠
}

const RenderHeader = ({ currentMonth, preveMonth, nextMonth }: renderType) => {
  return (
    <CalenderHeader>
      <div className="col">
        <div className="btn" onClick={preveMonth}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="text">
          <span>{format(currentMonth, "M")}월</span>
          {/* {format(currentMonth, "yyyy")} */}
        </div>
        <div className="btn" onClick={nextMonth}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      {/* <div className="btnArea"></div> */}
    </CalenderHeader>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["S", "M", "T", "W", "T", "F", "S"];

  for (let i = 0; i < 7; i++) {
    days.push(<div key={i}>{date[i]}</div>);
  }
  return <CalenderWeek>{days}</CalenderWeek>;
};

const RenderCells = ({ currentMonth, selectedDate, onDateClick }: renderType2) => {
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });
  const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 0 });
  const rows = [];
  let days = [];
  let day: any = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <CalenderCells className="row" key={day}>
        {days}
      </CalenderCells>,
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

const WeeklyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const preveMonth = () => {
    setCurrentMonth(subWeeks(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addWeeks(currentMonth, 1));
  };
  const onDateClick = (day: any) => {
    setSelectedDate(day);
  };
  return (
    <CalenderWrap>
      <RenderHeader currentMonth={currentMonth} preveMonth={preveMonth} nextMonth={nextMonth} />
      <RenderDays />
      <RenderCells currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick} />
    </CalenderWrap>
  );
};

export default WeeklyCalendar;

const CalenderWrap = styled.div`
  border-radius: 1rem;
  .body {
    position: relative;
    top: -1rem;
  }
`;

const CalenderHeader = styled.div`
  color: #4e4e4e;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  .col {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .btn {
    margin: 0.6rem;
  }
  .text {
    font-size: 0.7rem;
  }
  .text > span {
    font-weight: 800;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;
const CalenderWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  height: 39px;
  line-height: 39px;
  font-size: 0.8rem;
  div:nth-child(1) {
    color: #ff00b7d9;
  }
  div:nth-child(7) {
    color: #4139e0;
  }
`;
const CalenderCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  margin: 0.4rem;
  place-items: center;
  text-align: center;
  color: #7e7e83;
  height: 1.5rem;
  font-size: 0.8rem;

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
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #ba19c9;
    border-radius: 50%;
    line-height: 1.6rem;
    color: #fff !important;
  }
`;
