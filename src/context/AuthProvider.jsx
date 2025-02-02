import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      setLocalStorage();
      const { employees } = getLocalStorage();
      setUserData(employees);
    }
  }, []);

  if (!userData) return null;

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
