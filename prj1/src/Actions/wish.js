export const AddToWish = (id, data) => {
  return {
    type: "Add_To_Wish",
    id: id,
    infor: data,
  };
};

