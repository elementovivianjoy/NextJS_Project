/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import UsersNavbar from "../../../../components/users/UsersNavbar";

type UserProfile = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  avatar: string;
  bio: string;
};

export default function ProfilePage() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const userData: UserProfile = {
            id: data.id,
            name: data.name,
            email: data.email,
            username: data.username,
            phone: data.phone,
            address: {
              street: data.address.street,
              suite: data.address.suite,
              city: data.address.city,
              zipcode: data.address.zipcode,
            },
            website: data.website,
            company: {
              name: data.company.name,
              catchPhrase: data.company.catchPhrase,
              bs: data.company.bs,
            },
            avatar: `https://robohash.org/${data.id}?set=set5`,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          };
          setUserProfile(userData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="text-indigo-300 text-center">Loading...</div>;
  if (!userProfile) return <div className="text-red-300 text-center">User not found</div>;

  return (
    <UsersNavbar
      user={{
        id: userProfile.id.toString(),
        avatar: userProfile.avatar,
        name: userProfile.name,
        email: userProfile.email,
      }}
    >
      <div className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-semibold">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.email}</p>
              <p className="text-gray-500 text-sm">Username: {userProfile.username}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-2 text-gray-700">{userProfile.bio}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Contact Info</h2>
            <p className="mt-2 text-gray-700">Phone: {userProfile.phone}</p>
            <p className="mt-1 text-gray-700">
              Website:{" "}
              <a
                href={`http://${userProfile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {userProfile.website}
              </a>
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Address</h2>
            <p className="mt-2 text-gray-700">
              {userProfile.address.street}, {userProfile.address.suite},<br />
              {userProfile.address.city}, {userProfile.address.zipcode}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Company</h2>
            <p className="mt-2 text-gray-700 font-medium">{userProfile.company.name}</p>
            <p className="text-gray-600 italic">&quot;{userProfile.company.catchPhrase}&quot;</p>
            <p className="text-gray-600">{userProfile.company.bs}</p>
          </div>

          <div className="mt-6 flex space-x-4">
            <Link
              href={`/dashboard/user/profile/edit/${userProfile.id}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </UsersNavbar>
  );
}
