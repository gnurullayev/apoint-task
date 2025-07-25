import { routes } from "@/constants/routes";
import LoginPage from "@/pages/auth/LoginPage";
import MaterialsPage from "@/pages/materials";

export const publicRoutes = [
  {
    path: routes.LOGIN,
    element: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: routes.MATERIALS,
    element: MaterialsPage,
  },
];
