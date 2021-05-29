//firebase
import { db } from "../firebase";

export const getRoutes = async () => {
    const routes = [];
    const routesRef = await db
        .collection("routes")
        .get();
    routesRef.forEach((doc) => {
        routes.push({ ...doc.data(), id: doc.id });
    });
    return routes;
};

export const createRoute = async (route) => {
    const savedRouteRef = await db.collection("routes").add(route);
    return { ...route, id: savedRouteRef.id };
};

export const updateRoute = async (route) => {
    await db.collection("routes").doc(route.id).set(route);
};

export const removeRoute = async (routeId) => {
    await db.collection("routes").doc(routeId).delete();
};

// export const useCurrentRoute = () => {
//     // const { routes, getRoute } = useRouteContext();
//     // const [currentRoute, setCurrentRoute] = useState({});
//     // const { id } = useParams();

//     useEffect(() => {
//         setCurrentRoute(getRoute(id));

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [id, routes]);

//     return currentRoute;
// };