import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
function LayoutWishList() {
  const cart = useSelector((item) => item.wishReducer);

  return (
    <>
      <div className="color">
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>My Wishlist</li>
        </ul>
      </div>
      <Container>
        <div className="layoutwishlist">
          <div>
            <h1>My Wishlist</h1>
            <Container>
              <Row className="color">
                <Col>
                  <a>PRODUCT</a>
                </Col>
                <Col>
                  <a>PRICE</a>
                </Col>
              </Row>
            </Container>
            {cart.length > 0 ? (
              <div>
                {cart.map((item) => (
                  <Container className="boxShadow">
                    <Row>
                      <Col>
                        <div className="wish">
                          <div className="wish--img">
                            <img src={item.infor.image} />
                          </div>
                          <h5>{item.infor.title}</h5>
                        </div>
                      </Col>

                      <Col>
                        <p className="wish--price">${item.infor.price}</p>
                      </Col>
                    </Row>
                  </Container>
                ))}
              </div>
            ) : (
              <h5>Products weren't added to the wishlist.</h5>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
export default LayoutWishList;
