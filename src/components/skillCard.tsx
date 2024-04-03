import Image from 'next/image';
import React from 'react';

type skillcardProps = {
    skillName: string;
    skillDescription: string;
    iconUrl: string;
}
const TechSkillCard = ({ skillName, skillDescription, iconUrl }: skillcardProps) => {
  return (
    <div className="bg-white shadow-md max-w-xs rounded-md p-4 flex flex-col items-center">
      <Image height={96} width={96} src={iconUrl} alt={skillName} className="w-24 h-24 aspect-video rounded-lg overflow-hidden image-transparent mb-2" />
      <div className='w-full'>
        <h3 className="font-semibold text-lg">{skillName}</h3>
        <p className="text-gray-600 max-w-prose">{skillDescription}</p>
      </div>
    </div>
  );
};

export default TechSkillCard;
