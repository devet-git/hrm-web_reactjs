const endpointConst = {
  AUTH: {
    LOGIN: "auth/login",
    REGISTER: "auth/register",
    LOGOUT: "auth/logout",
  },
  USER: {
    INFO: (id) => `users/${id}`,
    CHANGE_PASSWORD: "users/change-password",
  },
  EMPLOYEE: {
    GET_ALL: "employees",
    ADD: "employees",
    UPDATE: (id) => "employees/" + id,
    DELETE: (id) => "employees/" + id,
  },
  INSURANCE: {
    ADD: "insurances",
  },
};

export default endpointConst;
