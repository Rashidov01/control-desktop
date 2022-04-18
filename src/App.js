import { Routes, Route } from "react-router-dom";
import "./sass/main.scss";
import {
  Layout,
  Home,
  Employees,
  Guests,
  Login,
  Report,
  Settings,
  Work,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="guests" element={<Guests />} />
        <Route path="login" element={<Login />} />
        <Route path="report" element={<Report />} />
        <Route path="settings" element={<Settings />} />
        <Route path="work" element={<Work />} />
      </Route>
    </Routes>
  );
}

export default App;
