import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

function MainRoutes () {
    const elements = useRoutes(routes);
    return (
        <>
            {elements}
        </>
    );
}
export default MainRoutes;