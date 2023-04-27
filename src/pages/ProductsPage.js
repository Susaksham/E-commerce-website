import React, { useState, useEffect, useContext } from "react";
import NavigationBelt from "../components/NavigationHeader/NavigationBelt";
import FiltersComponent from "../Filters/FiltersComponent";
import Body from "../components/Body/Body";
import Modal from "../UI/Modals/Modal";
import products from "../store/products";
import { useDispatch } from "react-redux";
import AuthModal from "../UI/Modals/AuthModal";
import MobNav from "../components/mobile/MobNav";
import useDynamicScreen from "../hooks/dynamicScreen";

function ProductsPage({
  categories,
  removeCartHandler,
  categoriesHandler,
  authHandler,
  viewChecker,
  displayAuth,
  displayCart,
  slideBar,
  slideNavBar,
}) {
  // const [view, setView] = useState(window.innerWidth <= 550)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(products());
  }, [dispatch]);

  return (
    <div>
      <Body categories={categories}></Body>
      {displayCart && <Modal removeCart={removeCartHandler}></Modal>}
      {displayAuth && <AuthModal removeAuth={authHandler}></AuthModal>}
      {viewChecker < 550 && (
        <MobNav
          slideBar={slideBar}
          slideNavBar={slideNavBar}
          categoriesHandler={categoriesHandler}
        ></MobNav>
      )}
    </div>
  );
}

export default ProductsPage;
