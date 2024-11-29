import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { changePage } = React.useContext(PageContext);

  return (
    <div className="h-screen w-full flex items-center flex-col">
      <ul className="flex gap-2 w-full justify-between  max-w-screen-md bg-yellow-400 h-10">
        <div onClick={() => changePage("home")}>Home</div>
        <div onClick={() => changePage("info")}>Info</div>
        <div onClick={() => changePage("about")}>About</div>
        <div onClick={() => changePage("login")}>Login</div>
      </ul>
      {children}
      <footer>Footer</footer>
    </div>
  );
}

export const PageContext = React.createContext({
  page: "home",
  changePage: (newPage: string) => {},
});

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = React.useState("home");

  return (
    <PageContext.Provider
      value={{ page, changePage: (newPage) => setPage(newPage) }}
    >
      {children}
    </PageContext.Provider>
  );
};
