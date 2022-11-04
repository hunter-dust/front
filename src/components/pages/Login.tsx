import StyledButton from "../UI/atoms/loginBtn";

const Login = () => {
  return (
    <div>
      <StyledButton variant="kakao">카카오톡 로그인</StyledButton>
      <StyledButton variant="naver">네이버 로그인</StyledButton>
    </div>
  );
};

export default Login;
