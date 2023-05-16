import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
// import SingleProduct from "./Pages/SingleProduct";
import Error from "./Pages/Error";
import CartPage from "./Pages/CartPage";
import { Auth } from "./Pages/Auth";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import Loader from "./components/Loader";
const LazySearch = React.lazy(() => import("./components/Search"));
const LazyPro = React.lazy(() => import("./Pages/SingleProduct"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/auth" exact element={<Auth />} />
          <Route path="/login" exact element={<Login />} />

          <Route
            path="/products"
            element={
              <React.Suspense fallback={<Loader />}>
                <Products />
              </React.Suspense>
            }
          />
          <Route
            path="/products/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyPro />
              </React.Suspense>
            }
          />

          <Route
            path="/search"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazySearch />
              </React.Suspense>
            }
          />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/account" element={<Account />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
