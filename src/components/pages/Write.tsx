import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import planAPI from "apis/planAPI";
import { ALARM_ARR, CATEGORY_ARR } from "utils/constant/arr";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import axios from "axios";

export interface PlanState {
  date: Date;
  category: string;
  title: string;
  notification: string;
  detail: string;
}

const initialState = {
  date: new Date(),
  category: "",
  title: "",
  notification: "",
  detail: "",
};

const Write = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);

  const handleOnChangeDate = (date: Date) => {
    setData((prev) => ({ ...prev, date }));
  };

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const __postCleanPlan = async () => {
    try {
      await planAPI.post(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  };

  return (
    <>
      <div>
        <span>날짜</span>
        <DatePicker
          locale={ko}
          selected={data.date}
          onChange={handleOnChangeDate}
          placeholderText="날짜를 선택해주세요"
          dateFormat="yyyy년 MM월 dd일"
        />
      </div>

      <div>
        <span>카테고리</span>
        {CATEGORY_ARR.map((category, idx) => (
          <span key={idx}>{category}</span>
        ))}
      </div>

      <div>
        <span>이벤트 이름</span>
        <input name="title" type="text" value={data.title} onChange={handleOnChangeInput} />
      </div>

      <div>
        <span>알림설정</span>
        {ALARM_ARR.map((category, idx) => (
          <span key={idx}>{category}</span>
        ))}
      </div>

      <div>
        <span>세부내용</span>
        <input name="detail" type="text" value={data.detail} onChange={handleOnChangeInput} />
      </div>

      <button type="button" onClick={__postCleanPlan}>
        저장하기
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        취소하기
      </button>
    </>
  );
};

export default Write;
