"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../lib/api";
import { User } from "../../../types/user";
import Link from "next/link";
import UserMap from "../../../components/UserMap";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset
} from "@/components/ui/sidebar"


export default function HomePage() {
  const { data: users = [], error, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-green-600 animate-pulse">
          Loading users...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-red-500">
          Error loading users. Please try again later.
        </p>
      </div>
    );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="w-full">

          <h1 className="text-4xl font-extrabold text-green-600 inline-block">
            User List
          </h1>
          <p className="text-gray-600 dark:text-white mt-2">
            View user details with their contact information.
          </p>

          {/* Search Input */}
          <div className="my-4">
            <input
              type="text"
              placeholder="Search by name, username or city..."
              className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 text-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Users List */}
          <div className="overflow-x-auto shadow-lg rounded-lg w-full">
            <table className="table-auto divide-y divide-gray-200 w-full bg-white-900 dark:bg-gray">
              <thead className="bg-white-900 dark:bg-gray">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-white uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-white uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 dark:text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-gray-600 dark:text-white">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-white">
                        @{user.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-white">
                        {user.address.city}, {user.address.street}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <Link
                          href={`/dashboard/admin/users/${user.id}`}
                          className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                        >
                          View Profile
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-600 dark:text-white py-4">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Map Visualization */}
          <div className="bg-muted/50 min-h-[100vh] flex-1 mb-8 rounded-xl md:min-h-min w-full" >
            <UserMap users={filteredUsers} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>

  );
}
