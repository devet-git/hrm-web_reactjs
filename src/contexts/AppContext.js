import { isJwtExpired } from "jwt-check-expiration";
import { AuthProvider } from "./auth-context";
import localStorageConst from "src/constants/localStorageConst";
import { EmployeeProvider } from "./EmployeeContext";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
const { createContext, useContext, useEffect, useState } = require("react");

export const AppContext = createContext(null)
export function AppProvider(props) {
	const { children } = props;
	const router = useRouter();
	const [notifyMessage, setNotifyMessage] = useState();

	useEffect(() => {
		const handleRouteChange = (url, { shallow }) => {
			const token = localStorage.getItem(localStorageConst.JWT_TOKEN)
			const isLogin = localStorage.getItem('authenticated')
			if (token && isJwtExpired(token) || !isLogin || isLogin != "true") {
				localStorage.clear()
				// router.replace("/auth/login")
			}
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router]);

	useEffect(() => {
		toast(notifyMessage)
	}), [notifyMessage]
	return (
		<AppContext.Provider value={{ setNotifyMessage }}>
			<AuthProvider>
				<EmployeeProvider>
					{children}
					<ToastContainer
						position="top-right"
						autoClose={1000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="colored"
					/>
				</EmployeeProvider>
			</AuthProvider>
		</AppContext.Provider>
	)

}
export const AppConsumer = () => AppContext.Consumer
export const useAppContext = () => useContext(AppContext)
