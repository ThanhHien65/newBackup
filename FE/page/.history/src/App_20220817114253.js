import Header from "./layouts/Header";
import "./Assests/style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
import Login from "./components/Login";
function App() {
  document.title = "Dashboard";
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
