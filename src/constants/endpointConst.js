const endpointConst = {
	AUTH: {
		LOGIN: "auth/login",
		REGISTER: "auth/register",
		LOGOUT: "auth/logout",
	},
	USER: {
		INFO: (id) => `users/${id}`,
		CHANGE_PASSWORD: "users/change-password"
	},
	EMPLOYEE: {
		GET_ALL: "employees",
		ADD: "employees",
		UPDATE: (id) => "employees/" + id,
		DELETE: (id) => "employees/" + id,
		EXPORT: "employees/export"
	},
	FILE: {
		GET_ALL: "files",
		UPLOAD: "files",
		DELETE: (id) => "files/" + id,
	},
	INSURANCE: {
		ADD: "insurances",
		GET_ALL: "insurances",
		UPDATE: (id) => "insurances/" + id,
	},
	DEPARTMENT: {
		ADD: "departments",
		GET_ALL: "departments",
		UPDATE: (id) => "departments/" + id,
		DELETE: (id) => "departments/" + id,
	},
	MAIL: {
		SEND: "mails",
	},
}

export default endpointConst;
