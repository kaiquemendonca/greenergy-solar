import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Projects } from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col !scroll-smooth bg-white">
      <Header/>
      <Main/>
      <About/>
      <Testimonials/>
      <Projects/>
      <Footer/>
      
    </div>
  );
}
