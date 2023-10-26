import { useState } from "react";
import CategoriesList from "./categoriesList";
import {useNavigate} from "react-router-dom"
function Categories() {
  const navigate = useNavigate()
  const [param, setParam] = useState({
    type: " ",
    sort: "LtH",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setParam((result) => {
      return { ...result, [name]: value };
    });
  };

  const handleSubmit =()=>{
   let type = param.type || " ";
   let sort = param.sort ;
   navigate(
   `/layoutproduct/search?type=${type || ""}&sort=${sort}`
   )
  
  }


  return (
    <>
      <form onChange={handleChange} >
        <div className="product">
          <h5>PRODUCT TYPE</h5>
          <div>
            <CategoriesList />
          </div>
        </div>

        <div className="sortby">
          <h5>SORT BY</h5>

          <select name="sort" id="sort" >
            <option value="LtH" >Low to Hight</option>
            <option value="HtL">High to Low</option>
          </select>
        </div>
        
      </form>
      <button onClick={handleSubmit} className="btn-find">Tìm Kiếm</button>
    </>
  );
}
export default Categories;
