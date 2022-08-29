import MainLayout from "@/components/layouts/MainLayout";
import FAQ from "@/components/sections/FAQ";
import HowInvestingWorks from "@/components/sections/HowInvestingWorks";
import InvestorBenefits from "@/components/sections/InvestorBenefits";
import InvestorsHero from "@/components/sections/InvestorsHero";
import DigitalWallet from "@/components/sections/DigitalWallet";

export default function Investors() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main className="w-100%">
        <InvestorsHero />
        <InvestorBenefits />
        <HowInvestingWorks />
        <DigitalWallet page={"investors"} />
        <FAQ />
      </main>
    </MainLayout>
  );
}
