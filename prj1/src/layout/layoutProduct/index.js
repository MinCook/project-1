import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import Categories from "./categories";
import ProductList from "./productList";
function LayoutProduct() {
  const [categories, setCategories] = useState([]);
  const [param ,getParam] = useSearchParams()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(" http://localhost:3000/category");
      const cate = await res.json();
      setCategories(cate);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="layoutproduct">
        <Link to="/">Home</Link>
        <a>Product</a>
      </div>
      <Container>
        <Row>
          <Col xs={2}>
            <div>
              <Categories />
            </div>
          </Col>
          <Col xs={10}>
            <div className="main--product">
              <h5>PRODUCT</h5>
            { param.size == 0 ? (<><ProductList /></>) :(<><Outlet /></>)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default LayoutProduct;
