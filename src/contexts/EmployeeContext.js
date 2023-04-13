import { createContext, useContext } from "react";
import employeeService from "src/services/employeeService";

export const EmployeeContext = createContext(null)

export function EmployeeProvider(props) {
	const { children } = props;

	const create = async ({ firstName, lastName, gender, address, dob }) => {
		const res = await employeeService.add({ firstName, lastName, gender, address, dob })
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
