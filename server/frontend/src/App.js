import LoginPanel from "./components/Login/Login"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel/>} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}
export default App;
