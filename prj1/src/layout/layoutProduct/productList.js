import { useEffect, useState } from "react";
import ProductItem from "./productItem";
function ProductList() {
  const [data, setData] = useState([]);
  const get = async () => {
    const res = await fetch(" http://localhost:3000/products");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const Api = await get();
      setData(Api);
    };
    fetchData();
  }, []);
  return (
    <>
      {data.map((item) => (
        <ProductItem data={item} key={item.id} />
      ))}
    </>
  );
}
export default ProductList;
