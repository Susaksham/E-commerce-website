import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./NavigationBelt.module.css";
import CartIcon from "../../UI/CartIcon";
import Person from "../../UI/Person";
import SearchIcon from "../../UI/SearchIcon";
import SecondBelt from "./SecondBelt";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import filter, { filterAction } from "../../store/filter";
import { authContext } from "../../store/auth-context";
function NavigationBelt(props) {
  const [fixed, setFixed] = useState(() => {
    return false;
  });
  const navbarHeightRef = useRef(null);
  const cart = useSelector((state) => {
    return state.filters.cart;
  });
  const authCtx = useContext(authContext);
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
    // dispatch(filterAction.changeSearchString(`${searchRef.current.value}`))
  };
  const searchChangeHandler = (e) => {
    dispatch(filterAction.changeSearchString(`${e.target.value}`));
  };
  const items = cart.reduce((accumadate, current) => {
    accumadate = accumadate + current.items;
    return accumadate;
  }, 0);

  const scrollHandler = useCallback(() => {
    if (window.scrollY > navbarHeightRef.current.clientHeight) {
      if (!fixed) {
        console.log("fixed");
        setFixed(true);
      }
    }
    if (window.scrollY < navbarHeightRef.current.clientHeight) {
      if (fixed) {
        console.log("not fixed");
        setFixed(false);
      }
      console.log("not fixed2");
    }
  }, [fixed]);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, [scrollHandler]);
  return (
    <>
      <div
        id="navbar"
        className={`${classes.navigationBelt} ${
          fixed ? classes.glassMorphism : ""
        }`}
        ref={navbarHeightRef}
      >
        <header className={classes.header}>
          <h1>
            <span className={classes.icon}>🛍️</span> BestBuy
          </h1>
          <form
            className={classes.search}
            onSubmit={submitHandler}
            style={{ backgroundColor: "white" }}
          >
            <div className={classes.searchIcon}>
              <SearchIcon color={`black`} size="32"></SearchIcon>
            </div>
            <input
              ref={searchRef}
              type="text"
              placeholder={"Search and hit enter"}
              onChange={searchChangeHandler}
            ></input>
            <button className={classes.submit} type="submit">
              <SearchIcon color="white" size="24px"></SearchIcon>
              Search
            </button>
          </form>
          <div className={classes.icons_container}>
            <div className={classes.cart}>
              {authCtx.idToken.length === 0 ? (
                <Person
                  onClick={props.authHandler}
                  color={`${fixed ? "#fb6a00" : "#fb6a00"}`}
                ></Person>
              ) : (
                <img
                  className={classes.profile}
                  src={`https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000`}
                  alt=" not available"
                  onClick={props.authHandler}
                ></img>
              )}
            </div>
            <div className={classes.cart}>
              <CartIcon
                onClick={props.onCartHandler}
                color={`${fixed ? "#fb6a00" : "#fb6a00"}`}
              ></CartIcon>
              <span className={classes.cartItems}>{items}</span>
            </div>
          </div>
        </header>
        {props.viewChecker > 550 && (
          <SecondBelt
            fixed={fixed}
            categoriesHandler={props.categoriesHandler}
          ></SecondBelt>
        )}
      </div>
    </>
  );
}

export default NavigationBelt;
