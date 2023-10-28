import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { Dashboard, Products, Users } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
