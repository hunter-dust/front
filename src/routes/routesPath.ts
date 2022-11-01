type Pages = "MAIN" | "NOT_FOUND";
type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
  MAIN: "/",
  NOT_FOUND: "*",
};

export default ROUTE_PATH;
