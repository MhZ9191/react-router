import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/products" Component={ProductPage} />
      </Routes>
    </BrowserRouter>
  );
}
