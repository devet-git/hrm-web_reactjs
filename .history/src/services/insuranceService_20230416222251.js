import apiConfig from "src/config/api.js";
import endpointConst from "src/constants/endpointConst.js";

const insuranceService = {
  async add() {
    try {
      const res = await apiConfig.post(endpointConst.INSURANCE.ADD);
      return res.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
};

export default insuranceService;
