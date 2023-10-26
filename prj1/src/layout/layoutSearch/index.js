import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function LayoutSearch() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [data, setData] = useState([]);
  const typeSearch = searchParam.get("type") || "";
  const sortSearch = searchParam.get("sort") || "LtH";
  

  const get = async () => {
    const res = await fetch(" http://localhost:3000/products");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const fetchData = async () => {
      const Api = await get();
      if (Api) {
        const SortFirst = sortSearch==="LtH" ? (Api.sort((a,b)=>(a.price-b.price))) : (Api.sort((a,b)=>(b.price-a.price)))
        const newSort = SortFirst.filter((item) => {       
         const type = typeSearch ? item.category?.includes(typeSearch) : "";
          return type ;
        });

        setData(newSort);
      }
    };
    fetchData();
  }, [sortSearch,typeSearch]);

  return (
    <>
      {data.map((item) => (
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
      ))}
    </>
  );
}
export default LayoutSearch;
