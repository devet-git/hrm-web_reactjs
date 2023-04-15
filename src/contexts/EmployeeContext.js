import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import employeeService from "src/services/employeeService";

export const EmployeeContext = createContext(null)

export function EmployeeProvider(props) {
	const { children } = props;
	const [employeeList, setEmployeeList] = useState([]);

	const createEmployee = async ({ firstName, lastName, gender, address, dob }) => {
		const res = await employeeService.add({ firstName, lastName, gender, address, dob })

		if (res && res.statusCode === 200) toast("Add employee successfully", { type: "success" })
		else toast("Add failed employee", { type: "error" })
		// console.log(res);
	}
	useEffect(() => {
		(async () => {
			const res = await employeeService.getAll()
			setEmployeeList(res.data || [])
		})()
	}, [children])
	const updateEmployee = async (id, { firstName, lastName, gender, address, dob }) => {
		const res = await employeeService.update(id, { firstName, lastName, gender, address, dob })
		if (res && res.statusCode === 200) toast("Update employee info successfully", { type: "success" })
		else toast("Update failed employee", { type: "error" })
		// console.log("EMP UPDATE", res);
	}
	return (
		<EmployeeContext.Provider value={{ createEmployee, updateEmployee, employeeList }}>
			{children}
		</EmployeeContext.Provider>
	)

}

export const EmployeeConsumer = () => EmployeeContext.Consumer
export const useEmployeeContext = () => useContext(EmployeeContext)
