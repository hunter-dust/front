type Pages = "MAIN" | "NOT_FOUND" | "LOGIN" | "KAKAO";
type PATH = Record<Pages, string>;

const ROUTE_PATH: PATH = {
  MAIN: "/",
  LOGIN: "/login",
  KAKAO: "/kakao/callback",
  NOT_FOUND: "*",
};

export default ROUTE_PATH;
