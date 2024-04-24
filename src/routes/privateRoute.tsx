import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";

export function PrivateRoute() {
  return (
    <>
      <Header />
      <div className="grid h-[600px] gap-4 grid-cols-[280px,_1fr]">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
