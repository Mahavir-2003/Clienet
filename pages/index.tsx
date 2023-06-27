import ImageIntro from "@/components/HomePage/ImageIntro";
import Intro from "@/components/HomePage/Intro";
import ProjectsShowcase from "@/components/HomePage/ProjectsShowcase";
import Services from "@/components/HomePage/Services";
import TextReveal from "@/components/HomePage/TextReveal";
import TunnelAnimation from "@/components/HomePage/TunnelAnimation";

export default function Home() {
  return (
    <>
     <Intro />
     <TextReveal />
     <ProjectsShowcase />
     {/* don't remove the below element from the div otherwise it will cause RemoveChild error while switching routes */}
     <div key="video_intro"><ImageIntro /></div>  
     <Services />

     {/* <TunnelAnimation /> */}
     <div className="w-screen h-screen bg-primary-dark"></div>
    </>
  )
}
