import { useDispatch } from "react-redux";
import "./style.css";
import { DeleteItem, UpdateQuantity } from "../../Actions/cart";
function Noficart(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const handleDown = () => {
    if (item.quantity > 1) dispatch(UpdateQuantity(item.id, -1));
  };
  const handleUp = () => {
    dispatch(UpdateQuantity(item.id));
  };
  const handleDelItem = () => {
    dispatch(DeleteItem(item.id));
  };

  return (
    <>
      <div>
        <div key={item.id} className="cart">
          <div className="cart--img">
            <img src={item.infor.image} />
          </div>

          <div className="cart--main">
            <div className="cart--mini__title">
              <span>{item.infor.title}</span>
              <button className="cart--X" onClick={handleDelItem}>
                {" "}
                X
              </button>
            </div>

            <div className="cart--mini__main">
              <div className="cart--mini__func">
                <button className="reduce" onClick={handleDown}>
                  -
                </button>
                <input
                  key={item.id}
                  value={item.quantity}
                  className="cart--input"
                />
                <button className="add" onClick={handleUp}>
                  +
                </button>
              </div>

              <div className="cart--price">${item.infor.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Noficart;
