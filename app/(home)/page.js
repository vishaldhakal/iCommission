import ContactUs from "@/components/ContactUs";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import UnLockSection from "@/components/UnLockSection";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <UnLockSection />
      <WhyUs />
      <GetStarted />
      <ContactUs />
    </>
  );
}
