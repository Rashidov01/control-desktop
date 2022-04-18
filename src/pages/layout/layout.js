import "./layout.scss";

import React from "react";
import { Header, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="page-container">
      <div className="sidebar-bar">
        <Sidebar />
      </div>
      <div className="main-page">
        <header className="site-header">
          <Header />
        </header>
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
