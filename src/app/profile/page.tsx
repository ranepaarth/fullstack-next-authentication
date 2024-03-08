"use client";
import React, { useEffect, useState } from "react";

type User = {
  _id: String;
  username: String;
  email: String;
  isAdmin: Boolean;
  createdAt: String;
  updatedAt: String;
};

type Data = {
  error?: String;
  message: String;
  success: Boolean;
  user: User;
};

const ProfilePage = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/users/profile");

      const data: Data = await response.json();
      console.log({ data });
      if (response.ok) {
        setUser(data.user);
      }
    };
    getUser();
  }, [user]);

  console.log(user);

  let content;
  if (user) {
    content = (
      <>
        <span className="text-lg font-bold text-blue-800">
          {user?.username}
        </span>
        <span className="font-medium text-blue-500">{user?.email}</span>
      </>
    );
  }
  if (!user) {
    content = <p className="text-lg font-bold text-blue-800">User Not found</p>;
  }
  return (
    <div>
      <span className="text-4xl font-extrabold">ProfilePage</span>
      <div className="mt-5 text-white bg-blue-300 p-4 rounded-md flex flex-col">
        {content}
      </div>
    </div>
  );
};

export default ProfilePage;
