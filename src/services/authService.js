import apiConfig from "src/config/api.js";
import endpointConst from "src/constants/endpointConst.js";


const authService = {
	async login(email, password) {
		try {
			const res = await apiConfig.post(endpointConst.AUTH.LOGIN, { email, password })
			return res.data;
		} catch (error) {
			return error?.response?.data || null
		}
	},
	async register({ username, email, password }) {
		try {
			const res = await apiConfig.post(endpointConst.AUTH.REGISTER, { username, email, password })
			return res.data;
		} catch (error) {
			return error.response.data
		}
	}
}

export default authService;
