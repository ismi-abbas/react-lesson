import { Link, Outlet } from "react-router-dom";

const learningNavigation = [
  {
    name: "useState",
    link: "/learn/useState",
  },
  {
    name: "useEffect",
    link: "/learn/useEffect",
  },
  {
    name: "useCallback",
    link: "/learn/useCallback",
  },
  {
    name: "useLayoutEffect",
    link: "/learn/useLayoutEffect",
  },
  {
    name: "useContext",
    link: "/learn/useContext",
  },
];

export default function Learning() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {learningNavigation.map((learning, index) => (
          <Link key={index} to={learning.link} className="link-button">
            {learning.name}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
