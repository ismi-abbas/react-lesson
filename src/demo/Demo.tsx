import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const exampleNav = [
  {
    name: "useState Todo Example",
    link: "/examples/use-state-todo",
  },
];

export default function Demo() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="flex justify-center items-center gap-2 w-full">
        {exampleNav.map((example, index) => (
          <Button asChild size="sm" key={index}>
            <Link to={example.link}>{example.name}</Link>
          </Button>
        ))}
      </div>

      <div className="flex w-full items-center justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
}
