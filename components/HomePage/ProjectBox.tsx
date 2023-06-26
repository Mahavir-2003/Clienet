import React from 'react';
import Image from 'next/image';

interface ProjectBoxProps {
  position: string;
  image: string;
  projectName: string;
  projectType: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ position, image, projectName, projectType}) => {
  const containerClassName = `w-full flex justify-${position === 'left' ? 'start' : 'end'} ${position === 'left' ? 'left' : 'right'} project`;

  return (
    <div className={containerClassName}>
      <div className='project-container'>
        <div className="flex w-full justify-between py-4 text-white text-xs sm:text-sm  font-medium tracking-wide">
          <p>{projectName.toUpperCase()}</p>
          <p>{projectType.toUpperCase()}</p>
        </div>
        <div className="w-full h-full relative project-box overflow-hidden flex justify-center items-center">
          <Image
            // priority={true}
            // unoptimized={true}
            src={image}
            quality={100}
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

