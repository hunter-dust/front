import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "components/pages/Main";
import NotFound from "components/pages/NotFound";
import ROUTE_PATH from "routes/routesPath";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.MAIN} element={<Main />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
