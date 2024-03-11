import React from "react";
import DashboardPrimaryNav from "../../components/Nav/DashboardPrimaryNav";
import DashboardFilterNav from "../../components/Nav/DashboardFilterNav";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardPrimaryNav />
      <DashboardFilterNav />
      <main>{children}</main>
    </div>
  );
};

