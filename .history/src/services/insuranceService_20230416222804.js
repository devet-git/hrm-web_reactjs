import apiConfig from "src/config/api.js";
import endpointConst from "src/constants/endpointConst.js";
import employeeService from "./employeeService";

const insuranceService = {
  async add({ number, issuedDate, issuedPlace, employeeId }) {
    try {
      const res = await apiConfig.post(endpointConst.INSURANCE.ADD, {
        number,
        issuedDate,
        issuedPlace,
        employeeId,
      });
      return res.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
};

export default insuranceService;
