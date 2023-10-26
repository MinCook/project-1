export const AddToCart = (id, data) => {
  return {
    type: "Add_To_Cart",
    id: id,
    infor: data,
  };
};

export const UpdateQuantity = (id, quantity = 1) => {
  return {
    type: "Update_Quantity",
    id: id,
    quantity: quantity,
  };
};
export const DeleteItem = (id) => {
  return {
    type: "Delete_Item",
    id:id,
  };
};


export const DeleteQuantity = () => {
  return {
    type: "Delete_Quantity",
  };
};
