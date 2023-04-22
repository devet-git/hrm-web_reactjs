import { createContext, useContext, useState } from "react";
import insuranceService from "src/services/insuranceService";
import userService from "src/services/userService";

export const InsuranceContext = createContext(null);

export const InsuranceProvider = (props) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);

  const addInsurance = async ({ number, issuedDate, issuedPlace, employeeId }) => {
    setIsLoading(true);
    let res = await insuranceService.add;
    console.log(res);
    setIsLoading(false);
  };
  return (
    <InsuranceContext.Provider value={{ isLoading, addInsurance }}>
      {children}
    </InsuranceContext.Provider>
  );
};

export const InsuranceConsumer = () => InsuranceContext.Consumer;
export const useInsuranceContext = () => useContext(InsuranceContext);
