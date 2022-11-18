//Kakao.js
import React, { useEffect } from "react";
import { kakaoLogin } from "../../redux/modules/KakaoLoginSlice";
import { useDispatch } from "react-redux";
import { Appdispatch } from "redux/store/configStore";

const Kakao = () => {
  const dispatch: Appdispatch = useDispatch();

  const code: string | null = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    dispatch(kakaoLogin({ code }));
  }, []);

  return <>잠시만 기다려주세요</>;
};

export default Kakao;
