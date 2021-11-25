import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthContextProvider from "./context/AuthContext";
import Header from "./components/Header";
import DetailProductPage from "./pages/DetailProductPage/DetailProductPage";
import CartPage from "./pages/CartPage/CartPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:productId" element={<DetailProductPage />} />
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
