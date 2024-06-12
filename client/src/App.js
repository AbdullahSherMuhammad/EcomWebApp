import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Userprofile from "./pages/User/Userprofile.jsx";
import PrivateRoute from "./components/Routes/Private.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import { useAuth } from "./components/context/AuthContext.js";
import AdminPanelLayout from "./pages/admin/AdminPanelLayout.jsx";
import MyDashboard from "./pages/admin/MyDashboard.jsx";
import Orders from "./pages/admin/Orders.jsx";
import Reviews from "./pages/admin/Reviews.jsx";
import StoreProducts from "./pages/admin/StoreProducts.jsx";
import Transactions from "./pages/admin/Transactions.jsx";
import Users from "./pages/admin/Users.jsx";

function App() {
  const [auth] = useAuth();
  const user = auth?.user?.name || "admin";
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="" element={<Userprofile />} />
        </Route>
        <Route path="/adminpanel" element={<AdminRoute />}>
          <Route path={`${user}`} element={<AdminPanelLayout />}>
            <Route index element={<MyDashboard />} />
            <Route path="dashboard" element={<MyDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<StoreProducts />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>

        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
