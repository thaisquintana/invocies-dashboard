import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./privateRoute";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";

export const Routers: React.FC = () => {
 return (
    <Routes>
    <Route element={<Login />} path="/" />
    <Route element={<PrivateRoute />}>
     <Route element={<Home />} path="/home" index />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
 )
}
