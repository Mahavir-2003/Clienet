import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Projects from "@/public/data/projects";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

const ProjectPage = () => {
  const router = useRouter();
  const { Project_ID } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {

    if (Project_ID) {
      const foundProject = Projects.find(
        (project) => project.project_ID === Project_ID
      );
      setProject(foundProject);
    }
  }, [Project_ID]);

  return (
    project && (
    <div className="w-screen project-page-container relative flex justify-center items-center flex-col bg-primary-dark">
        <div className="w-11/12  flex items-end pb-10" style={{minHeight : "65vh"}}>
          <h1 className=" text-primary-light text-8xl font-semibold tracking-wide">{project.projectName}</h1>
      </div>
      <div className="w-full h-screen">
          <Image width={100} height={100} src={project.image} alt="project image" unoptimized={true} className="w-full max-h-screen object-cover" />
      </div>
      <div className="w-10/12  flex pb-10 text-primary-light py-32" style={{minHeight : "65vh"}}>
        <div className="w-1/2 flex flex-col gap-y-20">
        <p className="text-5xl tracking-wide font-light leading-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque eius eos nulla totam voluptatibus molestiae dignissimos doloribus ut ex? Vitae voluptatibus, maxime accusamus ipsam eveniet quod dicta laudantium totam?</p>
        <div className="w-full">
          <div className="w-full flex py-10" style={{borderBottom :"1px solid rgba(255,255,255,0.5)"}}>
            <h1 className="text-3xl  w-1/3">Client</h1>
            <h1 className="text-3xl ">Mahavir Patel</h1>
          </div>
          <div className="w-full flex py-10" style={{borderBottom :"1px solid rgba(255,255,255,0.5)"}}>
            <h1 className="text-3xl  w-1/3">Year</h1>
            <h1 className="text-3xl ">2023</h1>
          </div>
          <div className="w-full flex py-10" style={{borderBottom :"1px solid rgba(255,255,255,0.5)"}}>
            <h1 className="text-3xl  w-1/3">Service Provided</h1>
            <h1 className="text-3xl ">Web Design & Development</h1>
          </div>
        </div>
        <div>
          <Link href="/" className="bg-primary-light inline-flex justify-center items-center text-primary-dark py-4 px-5 rounded-full">
            <div className="text-2xl font-semibold pr-8">Visit Website</div>
            <div className=" w-3 h-3 bg-primary-dark rounded-full"></div>
          </Link>
        </div>
        </div>
      </div>
    </div>
    )
  );
};

export default ProjectPage;
