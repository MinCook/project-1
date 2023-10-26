import { useState } from "react";
import "./style.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faX,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import logoright from "../layoutDefault/logo/logo--right.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteQuantity } from "../../Actions/cart";
import Noficart from "./nofiCart";
function LayoutDefault() {
  const [cart, setCart] = useState(false);
  const dispatch = useDispatch();
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.window.scrollY > 0) header.classList.add("animated");
    else header.classList.remove("animated");
  });

  const handleCart = () => {
    setCart(!cart);
  };
  const DeleteAll = () => {
    dispatch(DeleteQuantity());
  };
  const nofiCart = useSelector((data) => data.cartReducer);
  const total = nofiCart.reduce((sum, data) => {
    return sum + data.quantity;
  }, 0);

  const price = nofiCart.reduce((sum, data) => {
    return sum + data.infor.price * data.quantity;
  }, 0);

  const nofiWish = useSelector((data) => data.wishReducer);
  const wish = nofiWish.reduce((sum, data) => {
    return sum + data.quantity;
  }, 0);

  return (
    <>
      <div className="screen">
        <div className="main">
          <div className="header ">
            <div className="header--left">
              <img src={logoright} />
            </div>
            <div className="header--right">
              <div className="header--right__cnt1">
                <ul>
                  <li>
                    <Link to="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <a>Shop</a>
                  </li>
                  <li>
                    <a>Features</a>
                  </li>
                  <li>
                    <a>Pages</a>
                  </li>
                  <li>
                    <a>Buy Now</a>
                  </li>
                </ul>
              </div>

              <div className="header--right__cnt2">
                <ul>
                  <li>
                    <a>
                      <NavLink to="layoutproduct">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a>
                      <NavLink to="layoutwishlist" className="mainNofi">
                        <FontAwesomeIcon icon={faHeart} />
                        <div className="miniNofi">{wish}</div>
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                  </li>
                  <li>
                    <a onClick={handleCart} className="mainNofi">
                      <FontAwesomeIcon icon={faCartShopping} />
                      <div className="miniNofi">{total}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Outlet />
        </div>

        {cart ? (
          <>
            <div
              className="extra"
              id={cart == true ? "extra--open" : "extra--close "}
            >
              <div className="extra--title">
                <h4>YOUR CART ({total})</h4>
                <a onClick={handleCart}>
                  <FontAwesomeIcon icon={faX} />
                </a>
              </div>
              <div>
                {total > 0 ? (
                  <>
                    <div className="cart--title">
                      <a>
                        <FontAwesomeIcon icon={faTruck} />
                      </a>
                      <span>You have got</span>
                      <span>
                        <b>FREE SHIPPING</b>{" "}
                      </span>
                    </div>

                    <button className="btn--del" onClick={DeleteAll}>
                      Delete All
                    </button>
                    <div>
                      {nofiCart.map((item) => (
                        <Noficart item={item} key={item.id} />
                      ))}
                    </div>
                    <div className="price">PRICE:$ {price.toFixed(2)}</div>
                  </>
                ) : (
                  <>
                    <div className="extra--main">
                      <p>
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="extra--icon"
                        />
                      </p>
                      <p>You don't have any items in your cart.</p>
                      <button className="extra--btn" onClick={handleCart}>
                        Continue shopping
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default LayoutDefault;
