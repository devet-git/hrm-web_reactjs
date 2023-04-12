import { AuthProvider } from "./auth-context";

const { createContext, useContext } = require("react");

export const AppContext = createContext(null)
export function AppProvider(props) {
	const { children } = props;

	return (
		<AppContext.Provider value={null}>
			<AuthProvider>
				{children}
			</AuthProvider>
		</AppContext.Provider>
	)

}
export const AppConsumer = () => AppContext.Consumer
export const useAppContext = () => useContext(AppContext)
