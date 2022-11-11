import { PlanState } from "components/pages/Write";
import instance from "redux/modules/instance";

const planAPI = {
  post: async (payload: PlanState) => {
    await instance.post("/cleanPlan", payload);
  },
};

export default planAPI;
