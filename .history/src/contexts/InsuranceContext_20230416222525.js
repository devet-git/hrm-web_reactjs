import { createContext, useContext, useState } from "react";
import userService from "src/services/userService";

export const InsuranceContext = createContext(null);

export const InsuranceProvider = (props) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);

  const changePassword = async (currentPw, newPw) => {
    setIsLoading(true);
    let res = await userService.changePassword(currentPw, newPw);
    console.log(res);
    setIsLoading(false);
  };
  return (
    <InsuranceContext.Provider value={{ isLoading, changePassword }}>
      {children}
    </InsuranceContext.Provider>
  );
};

export const InsuranceConsumer = () => InsuranceContext.Consumer;
export const useInsuranceContext = () => useContext(InsuranceContext);
