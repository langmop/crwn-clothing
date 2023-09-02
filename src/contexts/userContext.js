import { createContext, useState, useEffect } from "react";

import {
  onAuthChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase.util";

export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser };

  useEffect(() => {
    const unsubscribe = onAuthChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
