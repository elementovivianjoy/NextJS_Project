"use client";

import React, { useEffect, useState } from "react";
import { User } from "../../types/user";
import AdminCharts from "../../components/AdminCharts";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AdminPostListsCards } from "../../components/admin/AdminPostListCards";
import withAuth from "../../hoc/withAuth";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset } from "@/components/ui/sidebar";

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium text-blue-600 dark:text-blue-400 animate-pulse">
          Loading Admin Dashboard...
        </p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 transition-all ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Admin Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl space-y-6">
          {/* Posts Section */}
          <section className="rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
            <AdminPostListsCards />
          </section>

          {/* Charts Section */}
          <section className="rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
            <AdminCharts />
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default withAuth(AdminDashboard);
