import { Outlet } from "react-router-dom";
import OhanaHeaderExample from "../OhanaApp/OhanaHeader/ohana-header-example";
import OhanaSidebar from "../OhanaApp/OhanaSidebar/ohana-sidebar";
import { SidebarProvider } from "../components/Sidebar/sidebar-context";

export default function MainLayout() {
  return (
    <div>
      <SidebarProvider>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            backgroundColor: "#EDEDED",
          }}
        >
          <OhanaSidebar />

          <main
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflowY: "hidden",
              height: "100vh",
            }}
          >
            <OhanaHeaderExample />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                overflowY: "scroll",
              }}
            >
              <Outlet />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
