import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "components/pages/Main";
import Login from "components/pages/Login";
import NotFound from "components/pages/NotFound";
import KakaoLogin from "components/pages/Kakao";
import ROUTE_PATH from "routes/routesPath";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.MAIN} element={<Main />} />
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTE_PATH.KAKAO} element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
