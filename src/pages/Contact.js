import React, { useEffect, useState } from "react";
import Contacts from "../components/Contact/Contacts";
import NavigationBelt from "../components/NavigationHeader/NavigationBelt";
import useDynamicScreen from "../hooks/dynamicScreen";
import Modal from "../UI/Modals/Modal";
import AuthModal from "../UI/Modals/AuthModal";
import MobNav from "../components/mobile/MobNav";
import { useDispatch } from "react-redux";
import products from "../store/products";
const Contact = ({
  categories,
  removeCartHandler,
  categoriesHandler,
  authHandler,
  viewChecker,
  displayAuth,
  displayCart,
  slideBar,
  slideNavBar,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Contacts></Contacts>{" "}
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
};

export default Contact;
