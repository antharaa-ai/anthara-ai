import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyAnthara from "@/components/sections/WhyAnthara";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import ArchitectureFirst from "@/components/sections/ArchitectureFirst";
import Industries from "@/components/sections/Industries";
import Technologies from "@/components/sections/Technologies";
import StudioPhilosophy from "@/components/sections/StudioPhilosophy";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />

      {/* ── ACT 1: VALUE PROPOSITION ─────────────────── */}
      <Hero />          {/* BLACK  — flagship impression          */}
      <TrustStrip />    {/* BLACK  — domain solutions marquee     */}
      <WhyAnthara />    {/* BLACK  — 3 pillars + metrics          */}

      {/* ── ACT 2: PROOF OF WORK ─────────────────────── */}
      <Services />      {/* BLACK  — capability buckets           */}
      <Projects />      {/* WHITE  — editorial case studies       */}

      {/* ── ACT 3: TECHNICAL AUTHORITY ───────────────── */}
      <ArchitectureFirst /> {/* BLACK — built-to-scale messaging */}
      <Industries />        {/* WHITE — domain specializations   */}
      <Technologies />      {/* BLACK — categorised tech stack   */}

      {/* ── ACT 4: TRUST & PHILOSOPHY ────────────────── */}
      <StudioPhilosophy />  {/* WHITE — editorial beliefs        */}
      <Process />           {/* WHITE — engagement model         */}

      {/* ── ACT 5: CLOSE ─────────────────────────────── */}
      <FinalCTA /> 
        {/* BLACK — dual-path CTA               */}
      <About />
      <Contact />
      <Footer />     {/* BLACK — contact strip + bottom bar  */}
      
    </main>
  );
}