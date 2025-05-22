/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
// import UsersNavbar from "./UsersNavbar;

interface PostProps {
    id?: string;
}

type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
};

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const Postlist = ({ id }: PostProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);


    // Fetch user data from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);



    useEffect(() => {
        const fetchPosts = async () => {
            if (!user) return;

            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data: Post[] = await res.json();


            const userPosts = data.filter((post) => post.userId === user.id);

            // Check if there's a new post in localStorage
            const newPost = localStorage.getItem("newPost");
            if (newPost) {
                const parsedPost = JSON.parse(newPost);
                userPosts.unshift(parsedPost); 
                localStorage.removeItem("newPost");
            }

            setPosts(userPosts);
            setLoading(false);
        };

        if (user) {
            fetchPosts();
        }
    }, [user]);



    const handleDelete = async (postId: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {

            await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: "DELETE",
            });

            setPosts(posts.filter((post) => post.id !== postId));
            window.alert("Posts is deleted successfully.")
        }
    };

    if (!user) {
        return <p className="text-center mt-10">User not logged in.</p>;
    }


    if (loading) {
        return <p className="text-center mt-10">Loading your posts...</p>;
    }

    return (
        <>
            {/* <UsersNavbar
        user={{
          ...user,
          id: user.id.toString(),
          avatar: user.avatar || "/default-avatar.png",
        }}
      /> */}
            <section id={id} className="bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto py-10 px-4 w-full">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Posts Lists</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Welcome to the heart of my blog, where stories of exploration, innovation, and personal growth come to life.</p>
                    </div>
                    <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h1>
                    <h2 className="text-xl mb-4">Posts</h2>

                    {/* Create Post Button */}
                    {/* <Link
                        href="/dashboard/user/post/create_posts"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md mb-6 inline-block"
                    >
                        Create Post
                    </Link> */}

                    {posts.length === 0 ? (
                        <p className="text-gray-500">You have no posts.</p>
                    ) : (

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 text-gray-900 dark:text-white">
                            {posts.map((post) => (
                                <li
                                    key={post.id}
                                    className="relative w-full shadow-one rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 border-gray-700 dark:border-gray-700"
                                    data-wow-delay=".15s"
                                >
                                    <Link href={`/dashboard/user/post/${post.id}`} className="w-full block relative">
                                        <img
                                            src="/images/blog-01.webp"
                                            alt="Post thumbnail"
                                            className="w-full h-48 object-cover"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                                        <h3>
                                            <Link
                                                href={`/dashboard/user/post/${post.id}`}
                                                className="font-bold text-blue-600 dark:text-white text-sm sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary"
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-base text-body-color font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 text-black dark:text-white">
                                            {post.body}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                                                    <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                                                        <img src="/images/author-02.webp" alt="Author" className="w-full" />
                                                    </div>
                                                    <div className="w-full">
                                                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                                                            By
                                                            <a href="javascript:void(0)" className="text-dark dark:text-white hover:text-primary dark:hover:text-primary">{user.name} </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="inline-block">
                                                    <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                                                    <p className="text-xs text-body-color">15 Dec, 2023</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/dashboard/user/post/edit/${post.id}`}
                                            className="text-blue-500 hover:text-blue-600 font-medium text-sm mr-5"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="text-red-500 hover:text-red-600 font-medium text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    )}
                </div>
            </section>

        </>
    );
}


