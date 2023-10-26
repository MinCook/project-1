function ProductItem(props) {
  const { data } = props;
  return (
    <>
      <div className="section">
        <div className="section--item">
          <div className="section--item__img">
            <img src={data.image} />
          </div>
          <div className="section--item_des">
            <p>{data.title}</p>
            <h6>${data.price}</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
