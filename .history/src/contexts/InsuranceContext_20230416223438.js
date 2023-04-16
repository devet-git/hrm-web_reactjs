import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import insuranceService from "src/services/insuranceService";
import userService from "src/services/userService";

export const InsuranceContext = createContext(null);

export const InsuranceProvider = (props) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);

  const addInsurance = async ({ number, issuedDate, issuedPlace, employeeId }) => {
    setIsLoading(true);
    let res = await insuranceService.add({ number, issuedDate, issuedPlace, employeeId });
    if (res && res.statusCode === 200) {
      toast("Add employee successfully", { type: "success" });
    } else toast("Add failed employee", { type: "error" });
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
