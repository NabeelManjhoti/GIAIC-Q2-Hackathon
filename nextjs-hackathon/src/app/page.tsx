import Browse from "@/components/Browse";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Inspirations from "@/components/Inspirations";
import Navbar from "@/components/Navbar";
import OurProducts from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Browse />
      <OurProducts />
      <Inspirations />
      <Footer />
    </div>
  );
}
