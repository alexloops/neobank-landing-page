import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layouts/Mainlayout";

export default function Home() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </MainLayout>
  );
}
