import { Button } from "@/components/ui/button";
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
    name: "useReducer",
    link: "/learn/useReducer",
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
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="flex justify-center items-center gap-2 w-full">
        {learningNavigation.map((learning, index) => (
          <Button asChild size="sm" key={index}>
            <Link to={learning.link}>{learning.name}</Link>
          </Button>
        ))}
      </div>

      <div className="flex w-full items-center justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
}
