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
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoright from "../layoutDefault/logo/logo--right.png";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


function LayoutDefault() {
  const [cart, setCart] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.window.scrollY > 0) header.classList.add("animated");
    else header.classList.remove("animated");
  });
  const handleCart = (e) => {
    setCart(!cart);
  };
  const nofiCart = useSelector((data) => data.cartReducer);
  const total = nofiCart.reduce((sum, data) => {
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
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="layoutwishlist">
                        <a>
                          <FontAwesomeIcon icon={faHeart} />
                        </a>
                      </Link>
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

          <main>
            <Outlet />
          </main>

          <div className="footer">
            <Container>
              <Row>
                <Col>
                  <img src={logoright} />
                  <a>
                    55 Gallaxy Enque, <br />
                    2568 steet, 23568 NY
                  </a>
                  <a>
                    <b>Phone</b>: (440) 000 000 0000
                  </a>
                  <a>
                    <b>Email</b>: sales@yousite.com
                  </a>
                </Col>

                <Col>
                  <p className="end--title">INFORMATION</p>
                  <a>About us</a>
                  <a>Contact Us</a>
                  <a>Career</a>
                  <a>My Account</a>
                  <a>Orders and Returns</a>
                </Col>

                <Col>
                  <p className="end--title">QUICK SHOP</p>
                  <a>Fashion</a>
                  <a>Men</a>
                  <a>Furniture</a>
                  <a>Home Decor</a>
                  <a>Shoes</a>
                </Col>

                <Col>
                  <p className="end--title">CUSTOMER SERVICES</p>
                  <a>Help & FAQs</a>
                  <a>Returns Policy</a>
                  <a>Terms & Conditions</a>
                  <a>Privacy Policy</a>
                  <a>Support Center</a>
                </Col>

                <Col>
                  <p className="end--title">NEWSLETTER</p>
                  <a>
                    Enter your email to receive daily news and get 20% off
                    coupon for all items.
                  </a>
                  <form>
                    <input type="email" placeholder="Email address" required />
                    <button className="button--one">SUBSCRIBE</button>
                  </form>
                </Col>
              </Row>
              <div className="end">
                <div>
                  <a>
                    © 2023 Avone. All Rights Reserved. Ecommerce Software by
                    Shopify
                    <br /> Designed by AdornThemes{" "}
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {cart ? (
          <>
            <div
              className="extra"
              id={cart == true ? "extra--open" : "extra--close "}
            >
              <div className="extra--title">
                <h4>YOUR CART</h4>
                <a onClick={handleCart}>
                  <FontAwesomeIcon icon={faX} />
                </a>
              </div>
              <div>
                {total > 0 ? (
                  <>
                    <div>
                      {nofiCart.map((item) => {
                        return (
                          <>
                            <div>
                              <div>
                                <img />
                              </div>
                              <h4>{item.title}</h4>
                              <h6>{item.price}</h6>
                            </div>
                          </>
                        );
                      })}
                    </div>
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
                      <button className="extra--btn">Continue shopping</button>
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
