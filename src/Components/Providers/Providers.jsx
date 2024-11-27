import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const Providers = ({children}) => {

  // color
  const [color, setColor] = useState(false);

  const data = {color, setColor};

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export default Providers;