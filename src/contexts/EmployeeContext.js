import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import employeeService from "src/services/employeeService";

export const EmployeeContext = createContext(null)

export function EmployeeProvider(props) {
	const { children } = props;

	const create = async ({ firstName, lastName, gender, address, dob }) => {
		const res = await employeeService.add({ firstName, lastName, gender, address, dob })

		if (res && res.statusCode === 200) toast("Add employee successfully", { type: "success" })
		else toast("Add failed employee", { type: "error" })
		console.log(res);
	}

	return (
		<EmployeeContext.Provider value={{ create }}>
			{children}
		</EmployeeContext.Provider>
	)

}

export const EmployeeConsumer = () => EmployeeContext.Consumer
export const useEmployeeContext = () => useContext(EmployeeContext)
