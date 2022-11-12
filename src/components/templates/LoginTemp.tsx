import StyledButton from "../UI/atoms/loginBtn";
import NaverLogin from "components/UI/molecules/NaverLogin";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWrap>
      DUST HUNTER
      <LoginBtnWrap>
        {/* <StyledButton variant="kakao">카카오톡 로그인</StyledButton> */}
        <NaverLogin />
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
