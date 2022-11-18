import StyledButton from "../atoms/loginBtn";

const REST_API_KEY = "a5caa0b539b2a1a1bc0a424c0eb6abe3";
const REDIRECT_URI = "http://localhost:3000/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoLogin = () => {
  return (
    <a href={KAKAO_AUTH_URL}>
      <StyledButton variant="kakao">카카오톡 로그인</StyledButton>
    </a>
  );
};

export default KakaoLogin;
