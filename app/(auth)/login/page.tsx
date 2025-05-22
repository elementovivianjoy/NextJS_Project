'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Assuming the password is admin123 and email is admin@admin.com
// This function simulates a login process. In a real application, you would replace this with an API call.
// It checks if the user is an admin or a regular user based on the email and password provided.  
// If the user is found, it returns a success response with user details. Otherwise, it returns an error message.
// The function also handles the case where the user is an admin by checking for specific credentials.
// The function uses the Fetch API to get user data from a placeholder API.

async function loginUser(email: string, password: string) {
  // Admin check credential 
  // In a real application, you would check against a database or an authentication service
  // Here, we are simulating an admin login with hardcoded credentials
  // In a real application, you would hash the password and compare it with the stored hash
  // This is just for demonstration purposes
  // In a real application, you would replace this with an API call to your authentication service
  if (email === "admin@admin.com" && password === "admin123") {
    return {
      success: true,
      user: {
        id: 0,
        name: "Administrator",
        email: "admin@admin.com",
        username: "admin",
        role: "admin",
      },
    };
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const user = users.find((u: { email: string }) => u.email === email);

    // Assuming the password is the same as the username for this example
    // In a real application, you would hash the password and compare it with the stored hash
    if (user) {
      if (password === user.username) {  
        return {
          success: true,
          user: {
            ...user,
            role: "user",
          },
        };
      } else {
        return { success: false, message: "Incorrect password" };
      }
    } else {
      return { success: false, message: "User not found" };
    }
  } catch {
    return { success: false, message: "Error fetching user data" };
  }
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const result = await loginUser(email, password);

    if (result.success) {
      const user = result.user;

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
      }

      alert(`Welcome, ${user.name}!`);

      if (user.role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/user");
      }
    } else {
      setErrorMessage(result.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-900 dark:text-white">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-900 dark:text-white">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900 dark:text-white"
              required
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-900 dark:text-white">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>

        <p className="mt-4 text-sm text-center">
          <Link
            href="/"
            className="inline-block mt-4 mb-6 text-blue-500 hover:text-green-800"
          >
            Go Home
          </Link>
        </p>
      </div>
    </div>
  );
}
