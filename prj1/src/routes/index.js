import LayoutWishList from "../layout/layoutWishList";
import LayoutDefault from "../layout/layoutDefault";
import LayoutProduct from "../layout/layoutProduct";
import LayoutMain from "../layout/layoutMain";
import LayoutSearch from "../layout/layoutSearch";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <LayoutMain />,
      },
      {
        path: "layoutwishlist",
        element: <LayoutWishList />,
      },
      {
        path: "layoutproduct",
        element: <LayoutProduct />,
        children: [
          {
            path: "search",
            element: <LayoutSearch />,
            
          },
          
          
        ],
      },
    ],
  },
];
