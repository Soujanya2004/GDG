// src/components/TeamPage.jsx
import React from "react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      profile: "https://via.placeholder.com/150",
    },
    {
      name: "Bob Smith",
      profile: "https://via.placeholder.com/150",
    },
    {
      name: "Charlie Brown",
      profile: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img
              src={member.profile}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
