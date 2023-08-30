import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anh1 from "../layoutDefault/logo/anh1.webp";
import anh2 from "../layoutDefault//logo/anh2.webp";
import anh3 from "../layoutDefault//logo/anh3.webp";
import anh4 from "../layoutDefault//logo/anh4.webp";
import anh5 from "../layoutDefault//logo/anh5.webp";
import anh6 from "../layoutDefault//logo/anh6.webp";
import logo1 from "../layoutDefault/logo/logo1.webp";
import logo2 from "../layoutDefault/logo/logo2.webp";
import logo3 from "../layoutDefault/logo/logo3.webp";
import logo4 from "../layoutDefault/logo/logo4.webp";
import logo5 from "../layoutDefault/logo/logo5.webp";
import logo6 from "../layoutDefault/logo/logo6.webp";
import logo7 from "../layoutDefault/logo/logo7.webp";
import logo8 from "../layoutDefault/logo/logo8.webp";
import section41 from "../layoutDefault/logo/section41.jpg";
import section42 from "../layoutDefault/logo/section42.jpg";
import section43 from "../layoutDefault/logo/section43.webp";
import {
  faHeart,
  faMagnifyingGlass,
  faCartShopping,
  faMoneyBill,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../layoutDefault/style.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Actions/cart";


function Product(props) {
  const [data, setData] = useState([]);
  const {item} =props;
  const dispatch = useDispatch();
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.window.scrollY > 0) header.classList.add("animated");
    else header.classList.remove("animated");
  });
useEffect(()=>{
  const fetchData=async()=>{
   const res =  await fetch(" http://localhost:3000/products");
   const data =await res.json();
   setData(data);
  }
  fetchData();
},[])

  return (
    <>
      <Container>
        <div className="section--one">
          <Row>
            <Col>
              <img src={anh1} />
              <h3>SHOP THE MAN</h3>
            </Col>
            <Col>
              <img src={anh3} />
              <h3>SHOP THE WOMAN</h3>
            </Col>
            <Col>
              <img src={anh2} />
              <h3>SHOP JEWERY</h3>
            </Col>
          </Row>
        </div>

        <div className="section--two">
          <div className="section-two__title">
            <h2>BEST SELLING</h2>
            <p>BEST SELLING ITEM OF THIS MONTH</p>
          </div>
          <div className="section--two__main">

             {data.map((item) => {
              if (item.id <= 8)
                return (
                  <>
                  
                    <div className="section--two--item" >
                      <div className="section--two--item__img">
                        <img src={item.image} />
                      </div>
                      <div className="section--two--item_des">
                        <p>{item.title}</p>
                        <h6>${item.price}</h6>
                      </div>
                      <div className="miniMenu">
                        <ul>
                          <li>
                            <div>
                            
                              <FontAwesomeIcon
                                icon={faCartShopping}/>
                            </div>
                          </li>
                          <li>
                            <div>
                              <FontAwesomeIcon icon={faHeart} />
                            </div>
                          </li>
                          <li>
                            <div>
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                );
            })} 
          </div>
          <button className="button--one section--two--btn">
            <Link to="/layoutproduct">SHOP ALL</Link>
          </button>
        </div>
      </Container>
      <div className="section--three">
        <Container>
          <div className="section--three--rowone">
            <div className="section--three--rowone__left">
              <div className="section--three--rowone__left__title">
                <h3>This week’s highlights</h3>
                <p>
                  Here is your chance to upgrade your wardrobe with a variation
                  of styles
                </p>
                <div className="button--one ">SHOP NOW</div>
              </div>
            </div>

            <div className="section--three--rowone__right">
              {data.map((item) => {
                if (item.id >= 9 && item.id <= 11)
                  return (
                    <>
                      <div className="section--three--item">
                        <div className="section--three--item__img">
                          <img src={item.image} />
                        </div>
                        <div className="section--three--item_des">
                          <p>{item.title}</p>
                          <h6>${item.price}</h6>
                        </div>
                      </div>
                    </>
                  );
              })}
            </div>
          </div>

          <Row>
            <Col className="section--three--rowtwo">
              <img src={anh4} />
              <div className="button--two ">WOMEN'S</div>
            </Col>

            <Col className="section--three--rowtwo">
              <img src={anh5} />
              <div className="button--two">MEN</div>
            </Col>

            <Col className="section--three--rowtwo">
              <img src={anh6} />
              <div className="button--two ">KIDS</div>
            </Col>
          </Row>

          <div className="button--four__title">AS SEEN IN</div>
          <Row>
            <Col>
              <img src={logo1} />
            </Col>
            <Col>
              <img src={logo2} />
            </Col>
            <Col>
              <img src={logo3} />
            </Col>
            <Col>
              <img src={logo4} />
            </Col>
            <Col>
              <img src={logo5} />
            </Col>
            <Col>
              <img src={logo6} />
            </Col>
            <Col>
              <img src={logo7} />
            </Col>
            <Col>
              <img src={logo8} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="section--four">
          <div className="section--four__title">
            <h2>
              <b>FRESH FROM OUR BLOG</b>
            </h2>
            <p>You are going to love this amazing shopify theme.</p>
          </div>

          <Row>
            <Col className="section--four__block">
              <img src={section41} />
              <div className="section--four--block__title">
                <p>Ensuring Customer Success</p>
                <a>April 25, 2020</a>
              </div>
            </Col>

            <Col className="section--four__block">
              <img src={section42} />
              <div className="section--four--block__title">
                <p>We can make your business shine!</p>
                <a>April 25, 2020</a>
              </div>
            </Col>

            <Col className="section--four__block">
              <img src={section43} />
              <div className="section--four--block__title">
                <p>Our development is your success</p>
                <a>April 25, 2020</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="section--five">
        <Container>
          <Row>
            <Col>
              <div className="section--five__wrap">
                <div className="section--five__icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="section--five__des">
                  <h5>FREE SHIPPING & RETURN</h5>
                  <p>Free shipping on all US orders</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="section--five__wrap">
                <div className="section--five__icon">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
                <div className="section--five__des">
                  <h5>FREE SHIPPING & RETURN</h5>
                  <p>Free shipping on all US orders</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="section--five__wrap">
                <div className="section--five__icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="section--five__des">
                  <h5>FREE SHIPPING & RETURN</h5>
                  <p>Free shipping on all US orders</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Product;
  