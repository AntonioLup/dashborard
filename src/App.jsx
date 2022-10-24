import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/pages/HomePage";
import { UserProvider } from "./components/context/change";
import { createContext, useState } from "react";
import Users from "./components/pages/Users";
import Projects from "./components/pages/Projects";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="home" element={<HomePage />}>
            <Route path="users" element={<Users />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
