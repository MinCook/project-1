
import { useState, useEffect } from "react";
import MainItem from "./maintItem";

function MainList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(" http://localhost:3000/products");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data.map((item) => (
          <MainItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
export default MainList;
