const cartReducer = (state = [], action) => {
  let newstate = [...state];
  switch (action.type) {
    case "Add_To_Cart":
      return [
        ...state,
        {
          id: action.id,
          infor: action.infor,
          quantity: 1,
        },
      ];
    case "Update_Quantity":
      const itemUpdate = newstate.find((item) => item.id === action.id);
      itemUpdate.quantity = itemUpdate.quantity + action.quantity;
      return newstate;
    case "Delete_Item":
       newstate = newstate.filter((item) => item.id != action.id);

      return newstate;

    case "Delete_Quantity":
      return [];
    default:
      return state;
  }
};
export default cartReducer;
