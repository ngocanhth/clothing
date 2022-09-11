import { Outlet, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { CustomRoutes } from "./index";

export const RecursiveRoute = (route: CustomRoutes) => {
  return (
    <Route
      key={new Date().getTime()}
      index={route.index}
      path={route.path}
      element={
        <ProtectedRoute isAuth={route.isAuth}>
          <Outlet/>
        </ProtectedRoute>
      }
    >
      {route?.children?.map((child: any) => RecursiveRoute(child))}
    </Route>
  );
};
