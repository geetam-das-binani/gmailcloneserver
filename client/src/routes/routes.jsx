import { Navigate, createBrowserRouter } from "react-router-dom";
import { routes } from "../constants/routeConstants";
import { lazy } from "react";


const Error=lazy(()=>import("../error/Error"))
export const router = createBrowserRouter([
  {
    path: routes.main.path,
    element: routes.main.element,
    children: [
      {
        path: "",
        element: <Navigate to={`${routes.emails.path}/inbox`} />,
        errorElement: <Error />,
      },
      
      {
        path:`${routes.emails.path}/:type` ,
        element: routes.emails.element,
        errorElement: <Error />,
       
      },
      {
        path: `${routes.view.path}/:id`,
        element: routes.view.element,
        errorElement: <Error />,
      }
    ],
  },
  {
    path:routes.invalid.path,
    element:<Error/>
  }
]);
