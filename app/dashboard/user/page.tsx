 "use client";

import { useEffect, useState } from "react";
import React from "react";
import UsersNavbar from "../../components/users/UsersNavbar";
import withAuth from '../../hoc/withAuth';
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/users/Hero";
import { Postlist } from "../../components/users/Postlist";
import { Team } from "../../components/users/Team";
import { About } from "../../components/users/About";
import { Contact } from "../../components/users/Contact";

type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string;
};


const RegularUserDashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  if (!user) {
    return <p className="text-center mt-10">User not logged in.</p>;
  }

  return (
    <>
      <UsersNavbar
        user={{
          ...user,
          id: user.id.toString(),
          avatar: user.avatar || "/default-avatar.png",
        }}
      />
      <Hero id="hero"/>
      <Postlist id="postlist" />
      <Team id="team" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default withAuth(RegularUserDashboard);

