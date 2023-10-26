
function CategoriesItem(props) {
  const { item } = props;

  return (
    <>
      <input
        id="categories"
        type="radio"
        name="type"
        value={item}
        className="form--input"
      ></input>
      <label for="categories" name={item}>
        {item}
      </label>
      <br />
    </>
  );
}
export default CategoriesItem;
