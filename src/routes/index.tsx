import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./privateRoute";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { NewUser } from "../pages/NewUser";
import { EditSubscription } from "../pages/EditSubscription";
import { CancelSubscription } from "../pages/CancelSubscription";

export const Routers: React.FC = () => {
 return (
    <Routes>
    <Route element={<Login />} path="/" />
    <Route element={<PrivateRoute />}>
     <Route element={<Home />} path="/home" index />
     <Route element={<NewUser />} path="/register-new-user" index />
     <Route element={<EditSubscription />} path="/edit-user-subscription" index />
     <Route element={<CancelSubscription />} path="/cancel-user-subscription" index />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
 )
}
