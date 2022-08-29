import MainLayout from "@/components/layouts/MainLayout";
import HomeHero from "@/components/sections/HomeHero";
import HomeHowItWorks from "@/components/sections/HomeHowItWorks";
import CompanyBenefits from "@/components/sections/CompanyBenefits";
import FAQ from "@/components/sections/FAQ";
import InvestorBenefits from "@/components/sections/InvestorBenefits";
import HowInvestingWorks from "@/components/sections/HowInvestingWorks";
import DigitalWallet from "@/components/sections/DigitalWallet";

export default function Home() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main className="w-100%">
        <HomeHero />
        <HomeHowItWorks />
        <CompanyBenefits />
        <DigitalWallet page="home" />
        <HowInvestingWorks />
        <InvestorBenefits />
        <FAQ />
      </main>
    </MainLayout>
  );
}
