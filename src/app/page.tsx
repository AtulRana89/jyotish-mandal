
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeroSlider from "@/components/heroSlider";
import Home from "@/components/home/home";

export default function HomePage() {
  return (
    <main className="bg-[#0F172A] text-[#F9FAFB] min-h-screen">
      <Header />
      {/* HeroSlider here */}
      <HeroSlider />
     <Home/>
      <Footer />
    </main>
  );
}
