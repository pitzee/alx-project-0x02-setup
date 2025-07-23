import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-gray-600 text-sm">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
