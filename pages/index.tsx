import Intro from "@/components/HomePage/Intro";
import ProjectsShowcase from "@/components/HomePage/ProjectsShowcase";
import TextReveal from "@/components/HomePage/TextReveal";
import TunnelAnimation from "@/components/HomePage/TunnelAnimation";

export default function Home() {
  return (
    <>
     <Intro />
     <TextReveal />
     {/* <TunnelAnimation /> */}
     <ProjectsShowcase />
     <div className="w-screen h-screen bg-primary-dark"></div>
    </>
  )
}
