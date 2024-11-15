import { Link, Outlet } from "react-router-dom";

const challangeNavigation = [
  {
    name: "Memory Game",
    link: "/challenges/memory-game",
  },
];

export default function Challenges() {
  return (
    <div>
      {challangeNavigation.map((challenge, index) => (
        <div key={index}>
          <Link
            to={challenge.link}
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
            {challenge.name}
          </Link>
        </div>
      ))}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
