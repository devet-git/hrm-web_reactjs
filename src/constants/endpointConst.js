const endpointConst = {
	AUTH: {
		LOGIN: "auth/login",
		REGISTER: "auth/register",
	},
	USER: {
		INFO: (id) => `users/${id}`,
		CHANGE_PASSWORD: "users/change-password"
	},
	EMPLOYEE: {
		GET_ALL: "employees"
	}
}

export default endpointConst;
