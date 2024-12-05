import "./index.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "./lib/utils";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-2 flex items-center space-x-2">
              <span className="font-bold text-xl">React Lesson</span>
            </Link>
            <span className="font-medium text-muted-foreground">by Abbas</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative items-start">
        <aside className="fixed top-14 hidden w-full shrink-0 overflow-y-auto border-r md:sticky md:flex md:flex-col md:w-[220px] lg:w-[240px]">
          <nav className="relative px-4 py-6 lg:px-6">
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/home"
                  className={cn(
                    "text-sm font-medium hover:bg-primary hover:text-primary-foreground rounded-md px-3 py-2 transition-colors",
                    location.pathname === "/home"
                      ? "bg-primary text-primary-foreground"
                      : "",
                  )}
                >
                  Home
                </Link>
                <Link
                  to="/learn"
                  className={cn(
                    "text-sm font-medium hover:bg-primary hover:text-primary-foreground rounded-md px-3 py-2 transition-colors",
                    location.pathname === "/learn"
                      ? "bg-primary text-primary-foreground"
                      : "",
                  )}
                >
                  Learning
                </Link>
                <Link
                  to="/challenges"
                  className={cn(
                    "text-sm font-medium hover:bg-primary hover:text-primary-foreground rounded-md px-3 py-2 transition-colors",
                    location.pathname === "/challenges"
                      ? "bg-primary text-primary-foreground"
                      : "",
                  )}
                >
                  Challenges
                </Link>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex w-full flex-col overflow-hidden flex-1">
          <Outlet />
        </main>
      </div>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Abbas
              </a>
              . The source code is available on{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
