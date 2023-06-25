import React from 'react';
import Image from 'next/image';

interface ProjectBoxProps {
  position: 'left' | 'right';
  image: string;
  projectName: string;
  projectType: string;
  classProperties?: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ position, image, projectName, projectType}) => {
  const containerClassName = `w-full flex justify-${position === 'left' ? 'start' : 'end'} ${position === 'left' ? 'left' : 'right'} `;

  return (
    <div className={containerClassName}>
      <div style={{ width: 500 , height : 600 , overflow : 'hidden' }}>
        <div className="flex w-full justify-between py-4 text-white text-lg font-medium tracking-wide">
          <p>{projectName.toUpperCase()}</p>
          <p>{projectType.toUpperCase()}</p>
        </div>
        <div className="w-full h-full relative project-box overflow-hidden flex justify-center items-center">
          <Image
            priority={true}
            unoptimized={true}
            src={image}
            alt="Project Picture"
            width={500}
            height={600}
            className="responsiveImage"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;

