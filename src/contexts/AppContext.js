import { isJwtExpired } from "jwt-check-expiration";
import { AuthProvider } from "./AuthContext";
import localStorageConst from "src/constants/localStorageConst";
import { EmployeeProvider } from "./EmployeeContext";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
const { createContext, useContext, useEffect, useState } = require("react");

export const AppContext = createContext(null)
export function AppProvider(props) {
	const { children } = props;

	return (
		<AppContext.Provider value={{}}>
			<AuthProvider>
				<EmployeeProvider>
					{children}
				</EmployeeProvider>
			</AuthProvider>
		</AppContext.Provider>
	)

}
export const AppConsumer = () => AppContext.Consumer
export const useAppContext = () => useContext(AppContext)
