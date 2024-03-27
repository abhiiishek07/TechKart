import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* not logged in path */}
          <Route path="/login" element={<Login />} />

          {/* logged in path */}
          <Route>
            <Route path="/shipping" element={<Shipping />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
