import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useApp } from "src/hooks/use-app";
import employeeService from "src/services/employeeService";

export const EmployeeContext = createContext(null)

export function EmployeeProvider(props) {
	const { children } = props;
	const [employeeList, setEmployeeList] = useState([]);
	const { refresh, refreshApp } = useApp()

	useEffect(() => {
		(async () => {
			const res = await employeeService.getAll()
			setEmployeeList(res.data || [])
		})()
	}, [children, refreshApp])


	const createEmployee = async ({ firstName, lastName, gender, address, dob }) => {
		const res = await employeeService.add({ firstName, lastName, gender, address, dob })

		if (res && res.statusCode === 200) {
			toast("Add employee successfully", { type: "success" })
			refresh();
		}
		else toast("Add failed employee", { type: "error" })
		// console.log(res);
	}
	const updateEmployee = async (id, { firstName, lastName, gender, address, dob }) => {
		const res = await employeeService.update(id, { firstName, lastName, gender, address, dob })
		if (res && res.statusCode === 200) {
			toast("Update employee info successfully", { type: "success" })
			refresh();
		}
		else toast("Update failed employee", { type: "error" })
		// console.log("EMP UPDATE", res);
	}
	const deleteEmployee = async (id) => {
		const res = await employeeService.delete(id);
		if (res && res.statusCode === 200) {
			toast("Delete employee successfully", { type: "success" })
			refresh();
		}
		else toast("Delete employee failed", { type: "error" })
		// console.log("EMP UPDATE", res);
	}
	return (
		<EmployeeContext.Provider value={{ createEmployee, updateEmployee, deleteEmployee, employeeList }}>
			{children}
		</EmployeeContext.Provider>
	)

}

export const EmployeeConsumer = () => EmployeeContext.Consumer
export const useEmployeeContext = () => useContext(EmployeeContext)
