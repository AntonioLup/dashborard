import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/pages/HomePage";
import { UserProvider } from "./components/context/change";
import { createContext, useState } from "react";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
