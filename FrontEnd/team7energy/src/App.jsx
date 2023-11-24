import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import Client from "./Components/personalClients/Clients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/yourBills" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
