import styled from "styled-components";

const backgroundColor = {
  kakao: "#ffe11b",
  naver: "#0fb500",
};

interface StyledButtonProps {
  readonly variant: "kakao" | "naver";
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => backgroundColor[props.variant]};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  margin: 0 0 0.5rem 0;
  cursor: pointer;
`;

export default StyledButton;
