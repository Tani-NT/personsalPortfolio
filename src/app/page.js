import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import Service from "@/components/Service";
import Project from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home(){
  return (
    <main className="w-full min-h-screen pt-[2vw]">
      <Navbar/>
      <LandingPage/>
      <About/>
      <Service/>
      <Project/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}