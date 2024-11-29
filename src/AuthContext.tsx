import React from "react";

export const AuthContext = React.createContext({
  isLogin: false,
  setIsLogin: (value: boolean) => {},
  user: {
    username: "",
    userId: 0,
  },
  setUser: ({ username, userId }: { username: string; userId: number }) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    userId: 0,
  });

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
