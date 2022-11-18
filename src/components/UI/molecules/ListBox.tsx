import React, { useState } from "react";
import CheckBox from "../atoms/CheckBox";
import CleanList from "../atoms/CleanList";
import styled from "styled-components";

const ListBox = () => {
  const [date, setDate] = useState("");
  return (
    <ListWrap>
      <p>{date}일 청소 목록</p>
      <Box>
        <CheckBox />
        <CleanList />
      </Box>
    </ListWrap>
  );
};
export default ListBox;

const ListWrap = styled.div`
  position: relative;
  top: 1.5rem;
  p {
    font-size: 0.8rem;
  }
`;
const Box = styled.div`
  color: black;
`;
