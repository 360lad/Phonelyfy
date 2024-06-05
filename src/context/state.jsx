import { createContext, useState } from "react";

export const PhonelifyContext = createContext();

function PhonelifyContextProvider({ children }) {
const [currentUser, setCurrentUser] = useState(null)
    return(
  <PhonelifyContext.Provider value={{currentUser, setCurrentUser}}>{children}</PhonelifyContext.Provider>
  )
}

export default PhonelifyContextProvider;
