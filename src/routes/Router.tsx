import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTE_PATH from "routes/routesPath";
import Main from "components/pages/Main";
import Login from "components/pages/Login";
import Write from "components/pages/Write";
import NotFound from "components/pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.MAIN} element={<Main />} />
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATH.WRITE} element={<Write />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
