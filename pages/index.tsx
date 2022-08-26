import MainLayout from "@/components/layouts/MainLayout";
import HomeHero from "@/components/sections/HomeHero";

export default function Home() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main className="w-100%">
        <h1>
          <HomeHero />
        </h1>
      </main>
    </MainLayout>
  );
}
