import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../layoutDefault/style.css";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, UpdateQuantity } from "../../Actions/cart";
import { AddToWish } from "../../Actions/wish";
function MainItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.window.scrollY > 0) header.classList.add("animated");
    else header.classList.remove("animated");
  });
  const cart = useSelector((item) => item.cartReducer);
  const handleCart = () => {
    cart.some((cart) => cart.id === item.id)
      ? dispatch(UpdateQuantity(item.id))
      : dispatch(AddToCart(item.id, item));
  };
  const cartHeart = useSelector( item => item.wishReducer);
  const handleHeart = () => {
   cartHeart.some(heart => heart.id ===item.id) ? 
   (<></>)
   :dispatch(AddToWish(item.id,item))

   
  };


  return (
    <>
      <div className="section--two__main">
        {item.id <= 8 ? (
          <>
            <div className="section--two--item">
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
                    <div onClick={handleCart}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                  </li>
                  <li>
                    <div onClick={handleHeart}>
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
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default MainItem;
