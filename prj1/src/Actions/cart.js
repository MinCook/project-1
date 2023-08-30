 export const AddToCart =( id,data)=>{
    console.log(id, data)
    return {
        type:"Add_To_Cart",
        id:id,
        infor:data,
    };
}
