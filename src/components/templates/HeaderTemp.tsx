import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const HeaderTemp = () => {
  const navi = useNavigate();
  const [loginState, setLoginState] = useState<String>("");
  const token: String | null = localStorage.getItem("jwtToken");
  useEffect(() => {
    token !== null ? setLoginState("로그아웃") : setLoginState("로그인");
  }, []);

  const moveLogin = () => {
    if (loginState === "로그인") {
      navi("/login");
    }
  };
  return (
    <div>
      <button onClick={moveLogin}>{loginState}</button>
    </div>
  );
};

export default HeaderTemp;
