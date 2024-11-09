import "./App.css";
import Sample from "./Sample";
import styles from "./Button.module.css";

export default function App() {
  const userData = {
    name: "John Doe",
    age: 30,
  };

  return (
    <div
      style={{
        fontSize: "1.5em",
        padding: "1em",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      <button className={styles.button}>Test</button>
      <div>
        <img src="/vite.svg" alt="logo" className="logo" />
      </div>
      App
      <div>
        <Sample name={userData.name} age={userData.age}/>
      </div>
    </div>
  );
}
