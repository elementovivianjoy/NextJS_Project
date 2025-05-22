// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";


// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function AdminCharts() {
//     const [userCount, setUserCount] = useState(0);
//     const [postCount, setPostCount] = useState(0);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchData = async () => {
//             const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
//             const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments");

//             const users = await usersRes.json();
//             const posts = await postsRes.json();
//             const comments = await commentsRes.json();

//             setUserCount(users.length);
//             setPostCount(posts.length);
//             setCommentCount(comments.length);
//         };

//         fetchData();
//     }, []);

//     const chartOptions = {
//         chart: {
//             id: "basic-bar",
//         },
//         xaxis: {
//             categories: ["Users", "Posts", "Comments"],
//         },
//     };

//     const chartSeries = [
//         {
//             name: "Count",
//             data: [userCount, postCount, commentCount],
//         },
//     ];

//     return (
//         <div className="mt-8 w-full md:w-auto p-6 rounded-lg shadow-md">
//             <h2 className="text-xl text-gray dark:text-white font-bold mb-4">Admin Data Visualization</h2>
//             <Chart className="bg-dark-800 text-gray dark:text-gray font-bold" options={chartOptions} series={chartSeries} type="bar" width="100%" height={350} />
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function AdminCharts() {
    const [userCount, setUserCount] = useState(0);
    const [postCount, setPostCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Fetch data
        const fetchData = async () => {
            const [usersRes, postsRes, commentsRes] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/users"),
                fetch("https://jsonplaceholder.typicode.com/posts"),
                fetch("https://jsonplaceholder.typicode.com/comments"),
            ]);

            const users = await usersRes.json();
            const posts = await postsRes.json();
            const comments = await commentsRes.json();

            setUserCount(users.length);
            setPostCount(posts.length);
            setCommentCount(comments.length);
        };

        fetchData();

        // Detect theme
        const checkDark = () =>
            document.documentElement.classList.contains("dark");

        // Initial check
        setIsDarkMode(checkDark());

        // Optional: Watch for theme changes
        const observer = new MutationObserver(() => {
            setIsDarkMode(checkDark());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const chartOptions = {
        chart: {
            id: "basic-bar",
            toolbar: { show: false },
        },
        theme: {
            mode: (isDarkMode ? "dark" : "light") as "dark" | "light",
        },
        xaxis: {
            categories: ["Users", "Posts", "Comments"],
            labels: {
                style: {
                    colors: isDarkMode ? "#e5e7eb" : "#1f2937",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: isDarkMode ? "#e5e7eb" : "#1f2937",
                },
            },
        },
    };

    const chartSeries = [
        {
            name: "Count",
            data: [userCount, postCount, commentCount],
        },
    ];

    return (
        <div className="mt-8 w-full md:w-auto p-6 rounded-lg">
            <h2 className="text-xl text-gray-800 dark:text-white font-bold mb-4">
                Admin Data Visualization
            </h2>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                width="100%"
                height={350}
            />
        </div>
    );
}
