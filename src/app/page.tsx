import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import CoreServices from "@/components/sections/CoreServices";
import CustomDevelopment from "@/components/sections/CustomDevelopment";
import ValueLayers from "@/components/sections/ValueLayers";
import HowItWorks from "@/components/sections/HowItWorks";
import Approach from "@/components/sections/Approach";
import ProprietaryTools from "@/components/sections/ProprietaryTools";
import Clients from "@/components/sections/Clients";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <LogoCloud />
        <CoreServices />
        <CustomDevelopment />
        <ValueLayers />
        <HowItWorks />
        <Approach />
        <ProprietaryTools />
        <Clients />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
