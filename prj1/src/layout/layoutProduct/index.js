import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";

function LayoutProduct() {
  const [data,setData]=useState([]);
  const [categories,setCategories]=useState([])
  useEffect(
    () =>
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        }),
    []
  );

  useEffect(()=>{
    fetch("http://localhost:3000/category")
    .then((res) => res.json())
    .then(categories=>setCategories(categories))
  },[])
 
  return (
  <>
    <div className="layoutproduct">
      <Link to="/">Home</Link>
      <a>Product</a>
    </div>
    <Container>
      <Row>
        <Col xs={2}><div>
          <div>
     <div>
     <h5>PRICE</h5>
          <input type="range" min="0" max="100"  value="0" />
     </div>


       <div className="product">
        <h5>
          PRODUCT TYPE
        </h5>
      <div>
        {categories.map((item)=>{
          return(
            <form className="form" >
            <input type="checkbox" id="categories" name="cate"value="cate+${item.id}" className="form--input"></input>
            <label for="categories">{item}</label><br />
          </form>
         
          )
        })}
      </div>
       
       </div>

       <div className="sortby">
        <h5>
            SORT BY
          </h5>
          <select name="sort" id="sort">
  <option value="Low to High">Low to Hight</option>
  <option value="High to Low">High to Low</option>
</select>
       
       </div>


          </div>
          </div>
          </Col>

          <Col xs={10}>
          <div className="main--product">

            <h5>PRODUCT</h5>

            <div>
          { data.length > 0 ? ( 
          <>
           {data.map((item)=>{
               if (item.id <= 9)
            return(
              <>
              
              <div className="section">
               <div className="section--item">
                      <div className="section--item__img">
                        <img src={item.image} />
                      </div>
                      <div className="section--item_des">
                        <p>{item.title}</p>
                        <h6>${item.price}</h6>
                      </div>
                      </div>
             </div>
              </>

            )

           })}
          </>
              
          ) :
          (
            <>
            <div>Nothing </div>
            </>
          ) }


            </div>


            </div>
            </Col>



      </Row>
    </Container>
  </>
  );
}
export default LayoutProduct;
