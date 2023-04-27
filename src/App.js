import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import ProductsPage from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/renders";
import ProductDetail from "./components/products/ProductDetail";
import { useContext } from "react";
import { authContext } from "./store/auth-context";
import "./App.css";
import MobNav from "./components/mobile/MobNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import NavigationBelt from "./components/NavigationHeader/NavigationBelt";
import useDynamicScreen from "../src/hooks/dynamicScreen";

function App() {
  const [categories, setCategories] = useState(true);

  const authCtx = useContext(authContext);
  const categoriesHandler = () => {
    console.log("categories");
    setCategories((state) => {
      return !state;
    });
  };
  const [slideBar, setSlideBar] = useState(true);
  const slideNavBar = () => {
    setSlideBar((slideBar) => {
      return !slideBar;
    });
  };
  const [displayCart, setDisplayCart] = useState(false);

  const [displayAuth, setDisplayAuth] = useState(false);
  const cartHandler = () => {
    setDisplayCart(true);
  };
  const removeCartHandler = () => {
    setDisplayCart(false);
  };
  const authHandler = () => {
    setDisplayAuth((state) => {
      return !state;
    });
  };
  const { viewChecker } = useDynamicScreen();
  return (
    <Provider store={store}>
      <div className="wrapper">
        <NavigationBelt
          categoriesHandler={categoriesHandler}
          onCartHandler={cartHandler}
          authHandler={authHandler}
          viewChecker={viewChecker}
        ></NavigationBelt>

        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Home
                  categories={categories}
                  removeCartHandler={removeCartHandler}
                  categoriesHandler={categoriesHandler}
                  authHandler={authHandler}
                  viewChecker={viewChecker}
                  displayAuth={displayAuth}
                  displayCart={displayCart}
                  slideBar={slideBar}
                  slideNavBar={slideNavBar}
                ></Home>
              }
            ></Route>
            <Route path="home" element={<h1>hello bro </h1>}></Route>
            <Route
              path="products"
              element={
                <ProductsPage
                  categories={categories}
                  removeCartHandler={removeCartHandler}
                  categoriesHandler={categoriesHandler}
                  authHandler={authHandler}
                  viewChecker={viewChecker}
                  displayAuth={displayAuth}
                  displayCart={displayCart}
                  slideBar={slideBar}
                  slideNavBar={slideNavBar}
                ></ProductsPage>
              }
            ></Route>
            <Route
              path=":productId"
              element={<ProductDetail></ProductDetail>}
            ></Route>
            <Route
              path="/contact"
              element={
                <Contact
                  categories={categories}
                  removeCartHandler={removeCartHandler}
                  categoriesHandler={categoriesHandler}
                  authHandler={authHandler}
                  viewChecker={viewChecker}
                  displayAuth={displayAuth}
                  displayCart={displayCart}
                  slideBar={slideBar}
                  slideNavBar={slideNavBar}
                ></Contact>
              }
            ></Route>
          </Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
