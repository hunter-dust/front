type Pages = "MAIN" | "NOT_FOUND" | "LOGIN";
type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
  MAIN: "/",
  LOGIN: "/login",
  NOT_FOUND: "*",
};

export default ROUTE_PATH;
