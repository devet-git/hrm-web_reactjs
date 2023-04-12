const endpointConst = {
	AUTH: {
		LOGIN: "auth/login",
		REGISTER: "auth/register",
	},
	USER: {
		INFO: (id) => `users/${id}`,
		CHANGE_PASSWORD: "users/change-password"
	}
}

export default endpointConst;
