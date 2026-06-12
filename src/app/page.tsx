import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Intelligence from "@/components/Intelligence/Intelligence";
import Nav from "@/components/Nav/Nav";
import Process from "@/components/Process/Process";
import SocialProof from "@/components/SocialProof/SocialProof";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Process />
        <Intelligence />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
