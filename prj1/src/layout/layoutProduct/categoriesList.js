import { useEffect, useState } from "react";
import CategoriesItem from "./categoriesItem";
function CategoriesList() {
  const [data, setData] = useState([]);
  const get = async () => {
    const res = await fetch(" http://localhost:3000/category");
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
        <CategoriesItem item={item} />
      ))}
    </>
  );
}
export default CategoriesList;
