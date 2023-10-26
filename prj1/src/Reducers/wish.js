const wishReducer = (state = [], action) => {
  switch (action.type) {
    case "Add_To_Wish":
      return [
        ...state,
        {
          id: action.id,
          infor:action.infor,
          quantity:1,
        },
      ];
    
    default:
      return state;
  }
};
export default wishReducer;
