import React from "react";
import { useEffect } from "react";
import StyledButton from "../atoms/loginBtn";

const { naver } = window as any;

const NaverLogin = (props: any) => {
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "zB3oHmlGVbwcNr1WDA88",
      callbackUrl: "http://localhost:3000",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 3, height: "47" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
};

export default NaverLogin;
