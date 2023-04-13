import { createContext, useContext, useState } from "react";
import userService from "src/services/userService";

export const UserContext = createContext(null)

export const UserProvider = (props) => {
	const { children } = props;
	const [isLoading, setIsLoading] = useState(false)

	const changePassword = async (currentPw, newPw) => {
		setIsLoading(true)
		let res = await userService.changePassword(currentPw, newPw)
		console.log(res);
		setIsLoading(false)
	}
	return (
		<UserContext.Provider value={{ isLoading, changePassword }}>
			{children}
		</UserContext.Provider>
	)
}

export const UserConsumer = () => UserContext.Consumer;
export const useUserContext = () => useContext(UserContext);