import "./index.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">React Lesson</Link>
        <span>By Abbas</span>
      </header>

      <main className="main-content">
        <aside className="sidebar">
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learn" className="nav-link">
                  Learning
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="nav-link">
                  Challenges
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="content">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        {new Date().getFullYear()} &copy; React Lesson
      </footer>
    </div>
  );
}
