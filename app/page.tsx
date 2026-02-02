import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import PreviewSection from "./components/PreviewSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <div id="preview">
        <PreviewSection />
      </div>
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
