import React, { useState } from "react";
import CheckBox from "../atoms/CheckBox";
import CleanList from "../atoms/CleanList";
import styled from "styled-components";

const ListBox = () => {
  const [date, setDate] = useState("");
  return (
    <>
      <p>{date}일 청소 목록</p>
      <Box>
        <CheckBox />
        <CleanList />
      </Box>
    </>
  );
};
export default ListBox;

const Box = styled.div`
  color: black;
`;
