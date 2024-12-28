import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

export default function MainLayout() {
    return (
      <main className="w-screen max-h-screen min-h-screen flex flex-row gap-4 max-w-[100vw] overflow-hidden">
        <Sidebar />
        <div className="w-full flex flex-col my-4 mr-4 overflow-hidden">
          <Navbar />
          <Outlet />
        </div>
      </main>
    );
  }

