import { useState, useCallback } from "react";
import { Container, Navbar, Sidebar } from "src/components";

export default function MainLayout(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarCallback = useCallback((open) => {
    setSidebarOpen(open);
  });

  return (
    <Container>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={sidebarCallback} />
      <div className="flex-1 flex flex-col">
        <Navbar setSidebarOpen={sidebarCallback} />
        <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div className="mx-8 py-8">{props.children}</div>
        </div>
      </div>
    </Container>
  );
}
