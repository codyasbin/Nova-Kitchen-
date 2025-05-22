import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DesignInspiration from "@/components/home/DesignInspiration";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <DesignInspiration />
      <Testimonials />
      <CtaSection />
    </div>
  );
}

//just a comment to commit
