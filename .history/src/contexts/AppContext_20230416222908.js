import { isJwtExpired } from "jwt-check-expiration";
import { AuthProvider } from "./AuthContext";
import localStorageConst from "src/constants/localStorageConst";
import { EmployeeProvider } from "./EmployeeContext";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { InsuranceProvider } from "./InsuranceContext";
const { createContext, useContext, useEffect, useState } = require("react");

export const AppContext = createContext(null);
export function AppProvider(props) {
  const { children } = props;
  const [refreshApp, setRefreshApp] = useState(true);
  const refresh = () => setRefreshApp(!refreshApp);
  return (
    <AppContext.Provider value={{ refreshApp, refresh }}>
      <AuthProvider>
        <EmployeeProvider>
          <InsuranceProvider>{children}</InsuranceProvider>
        </EmployeeProvider>
      </AuthProvider>
    </AppContext.Provider>
  );
}
export const AppConsumer = () => AppContext.Consumer;
export const useAppContext = () => useContext(AppContext);
