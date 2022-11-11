type Pages = "MAIN" | "NOT_FOUND" | "LOGIN" | "WRITE";
type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
  MAIN: "/",
  LOGIN: "/login",
  WRITE: "/write",
  NOT_FOUND: "*",
};

export default ROUTE_PATH;
