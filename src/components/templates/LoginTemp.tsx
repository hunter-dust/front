import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import StyledButton from "../UI/atoms/loginBtn";
import { loginToNaver } from "../../redux/modules/LoginSlice";
import NaverLogin from "components/UI/molecules/NaverLogin";
import KakaoLogin from "components/UI/molecules/KakaoLogin";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithNaver = () => {
    // dispatch(loginToNaver(true, "dd"));
  };

  return (
    <LoginWrap>
      DUST HUNTER
      <LoginBtnWrap>
        <StyledButton variant="naver" onClick={loginWithNaver}>
          네이버 로그인
          {/* <NaverLogin /> */}
        </StyledButton>
        <KakaoLogin />
      </LoginBtnWrap>
    </LoginWrap>
  );
};

export default Login;
const LoginWrap = styled.div`
  @font-face {
    font-family: "Tenada";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Tenada.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "Tenada";
  font-size: 3rem;
  text-align: center;
  position: relative;
  top: 6rem;
`;
const LoginBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 2rem;
  position: relative;
  top: 3ßrem;
`;
