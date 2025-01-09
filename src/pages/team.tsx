
"use client";

import { useEffect, useState } from 'react';
import { Card, CardHeader } from '@nextui-org/react';
import teamMembersData from '../data/teammembers.json';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

function preloadImages(urls: string[]) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url; // No need to modify the URL as the paths in JSON are correct
  });
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    setTeamMembers(teamMembersData);
    const avatarUrls = teamMembersData.map(member => member.avatar);
    preloadImages(avatarUrls);
  }, []);

  return (
    <section id="team" className="scroll-mt-28 mb-28 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="bg-white rounded-lg p-5 flex flex-col items-center shadow-md"
          >
            <img
              src={member.avatar} // Use the avatar directly as paths are correct in JSON
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <CardHeader className="text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </CardHeader>
            <p className="text-sm text-gray-700 text-center">{member.bio}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
