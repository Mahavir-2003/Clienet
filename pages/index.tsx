import ImageIntro from "@/components/HomePage/ImageIntro";
import Intro from "@/components/HomePage/Intro";
import ProjectsShowcase from "@/components/HomePage/ProjectsShowcase";
import Services from "@/components/HomePage/Services";
import TextReveal from "@/components/HomePage/TextReveal";

export default function Home() {
  return (
    <>
     <Intro />
     {/* don't remove the below element from the div otherwise it will cause RemoveChild error while switching routes */}
     <div key="video_intro"><ImageIntro /></div>
     <TextReveal />
     <ProjectsShowcase />
     <Services />
    </>
  )
}
