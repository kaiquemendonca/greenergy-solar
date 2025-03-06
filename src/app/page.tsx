import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Main/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}
