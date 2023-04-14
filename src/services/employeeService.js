import apiConfig from "src/config/api.js";
import endpointConst from "src/constants/endpointConst.js";

const employeeService = {
	async getAll() {
		try {
			const res = await apiConfig.get(endpointConst.EMPLOYEE.GET_ALL)
			return res.data
		} catch (error) {
			return error?.response?.data
		}
	},
	async add({ firstName, lastName, gender, address, dob }) {
		try {
			const res = await apiConfig.post(endpointConst.EMPLOYEE.ADD, { firstName, lastName, gender, address, dob })
			return res.data
		} catch (error) {
			return error?.response?.data || null
		}
	},

}

export default employeeService;
