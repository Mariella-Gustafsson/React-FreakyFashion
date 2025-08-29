import { Outlet } from "react-router-dom";
import AdminAside from "../component/Admin/AdminAside";
import AdminHeader from "../component/Header/AdminHeader";

function AdminLayout ({children}) {

  return (
    <>
      <AdminHeader />
      <div className="flex min-h-screen">
        <AdminAside />

        <div className="w-full">
        <main className="overflow-auto">
          <Outlet />
        </main>
        </div>
      </div>
    </>
  )
}

export default AdminLayout;