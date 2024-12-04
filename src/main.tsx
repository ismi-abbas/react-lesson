import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Challenges from "./challenges/Challenges.tsx";
import MemoryGame from "./challenges/MemoryGame/solution/MemoryGame.solution.tsx";
import Learning from "./learning/Learning.tsx";
import UseStateExample from "./learning/UseState/UseStateExample.tsx";
import UseEffectExample from "./learning/UseEffect/UseEffectExample.tsx";
import Home from "./home/Home.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="error-page">
        404 Page Not Found{" "}
        <button
          className="button-primary"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/learn",
        element: <Learning />,
        children: [
          {
            path: "/learn/useState",
            element: <UseStateExample />,
          },
          {
            path: "/learn/useEffect",
            element: <UseEffectExample />,
          },
        ],
      },
      {
        path: "challenges",
        element: <Challenges />,
        children: [
          {
            path: "/challenges/memory-game",
            element: <MemoryGame />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </StrictMode>,
);
