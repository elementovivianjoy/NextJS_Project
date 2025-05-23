
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
import { SidebarInset } from "@/components/ui/sidebar"

// Types
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Dashboard() {
  const [user] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "null");
    }
    return null;
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [postsRes, usersRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
      ]);

      const postsData: Post[] = await postsRes.json();
      const usersData: User[] = await usersRes.json();

      setUsers(usersData);

      const filteredPosts =
        user?.email === "admin@admin.com"
          ? postsData
          : postsData.filter((post) => post.userId === user?.id);

      setPosts(filteredPosts);
      setLoading(false);
    };

    if (user) fetchData();
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (!user) return <p className="text-center mt-10">Please login.</p>;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Posts List Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="max-w-4xl mx-auto py-10 px-4 bg-white-900 dark:bg-gray">
          <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h1>
          <ul className="space-y-6">
            {posts.map((post) => {
              const postAuthor = users.find((u) => u.id === post.userId);
              return (
                <li key={post.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/dashboard/admin/post/${post.id}`}>
                    <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-white mb-1">
                    Posted by: <strong className="text-sm text-blue-900 dark:text-white mb-1">{postAuthor?.name}</strong> (@{postAuthor?.username})
                  </p>
                  <p className="text-gray-700 dark:text-white mt-1">{post.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
