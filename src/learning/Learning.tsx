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
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex justify-center items-center gap-2 w-full">
        {learningNavigation.map((learning, index) => (
          <Link
            key={index}
            to={learning.link}
            className="py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {learning.name}
          </Link>
        ))}
      </div>

      <div className="flex w-full">
        <Outlet />
      </div>
    </div>
  );
}
