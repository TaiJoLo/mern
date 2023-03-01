import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lauren",
      image:
        "https://images.unsplash.com/photo-1677056781459-4f85f82df5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      places: 3,
    },
  ];
  return <UsersList itmes={USERS} />;
};
export default Users;
