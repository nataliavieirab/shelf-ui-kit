import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../components/Sidebar/sidebar-context";
import DemoHeaderExample from "../DemoLayout/DemoHeader/demo-header-example";
import DemoSidebar from "../DemoLayout/DemoSidebar/demo-sidebar";

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
          <DemoSidebar />

          <main
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflowY: "hidden",
              height: "100vh",
            }}
          >
            <DemoHeaderExample />

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
