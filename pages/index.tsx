import MainLayout from "@/components/layouts/MainLayout";
import HomeHero from "@/components/sections/HomeHero";
import HomeHowItWorks from "@/components/sections/HomeHowItWorks";
import HomeBenefits from "@/components/sections/HomeBenefits";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main className="w-100%">
        <h1>
          <HomeHero />
          <HomeHowItWorks />
          <HomeBenefits />
          <FAQ />
        </h1>
      </main>
    </MainLayout>
  );
}
