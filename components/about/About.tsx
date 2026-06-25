"use client";

import TeamCard from "./TeamCard";
import MetricCard from "./MetricCard";
import InnovationCard from "./InnovationCard";
// import Timeline from "./Timeline";
import FadeUp from "../FadeUp";

export default function About() {
  return (
    <section
      id="about"
      className="
      py-40
      bg-[#050505]
      px-8
    "
    >
      <div className="max-w-7xl mx-auto">

        <FadeUp>
          <p className="uppercase tracking-[0.25em] text-white/40">
            About Anthara
          </p>

          <h2 className="text-6xl font-bold mt-6 max-w-4xl">
            Built By Engineers Obsessed With Solving Complex Problems.
          </h2>

          <p className="text-white/60 mt-8 max-w-3xl leading-relaxed">
            Anthara was founded by engineers passionate about
            artificial intelligence, scalable software systems,
            and solving real-world business challenges through
            technology.
          </p>
        </FadeUp>

        {/* Team */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          <TeamCard
            image="/Aryan.jpg"
            name="Aryan Pandey"
            role="Founder & Engineer"
            tags={[
              "AI Systems",
              "Backend Architecture",
              "Healthcare AI",
              "Automation",
            ]}
            portfolio="https://aryanvp.vercel.app/"
          />

          <TeamCard
            image="/Rishabh.jpg"
            name="Rishabh Tiwari"
            role="Co-Founder & Engineer"
            tags={[
              "Full Stack Systems",
              "Product Engineering",
              "Infrastructure",
              "Architecture",
            ]}
            portfolio="https://rishabhtiwari.vercel.app/"
          />

        </div>

        {/* Story */}

        <div className="mt-24 max-w-4xl">
          <h3 className="text-4xl font-bold">
            Why We Started Anthara
          </h3>

          <p className="text-white/60 mt-6 leading-relaxed">
            We saw businesses struggling with fragmented workflows,
            inefficient operations, and underutilized data.
          </p>

          <p className="text-white/60 mt-6 leading-relaxed">
            While many solutions focused on surface-level software,
            we believed intelligent systems could fundamentally
            improve how organizations operate.
          </p>

          <p className="text-white/60 mt-6 leading-relaxed">
            Anthara was created to bridge the gap between advanced
            engineering and practical business outcomes.
          </p>
        </div>

        {/* Metrics */}

        <div className="grid md:grid-cols-5 gap-5 mt-24">

          <MetricCard
            number="3"
            title="Production Systems"
          />

          <MetricCard
            number="10"
            title="Technology Stacks"
          />

          <MetricCard
            number="5"
            title="Innovation Programs"
          />

          <MetricCard
            number="AI"
            title="First Engineering"
          />

          <MetricCard
            number="24/7"
            title="Automation Mindset"
          />

        </div>

        {/* Innovation */}

        <div className="mt-32">

          <h3 className="text-5xl font-bold">
            Innovation & Research
          </h3>

          <p className="text-white/50 mt-4">
            Building Under Pressure. Delivering Under Constraints.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            <InnovationCard
              title="Healthcare AI Challenge"
              achievement="Finalist"
              description="Built an intelligent insurance interpretation platform capable of analyzing policy documents and identifying claim-risk factors."
              tech={[
                "FastAPI",
                "RAG",
                "OCR",
                "LLMs",
              ]}
            />

            <InnovationCard
              title="National Hackathon"
              achievement="Top Performer"
              description="Engineered scalable automation workflows and intelligent data-processing pipelines."
              tech={[
                "Python",
                "AI",
                "Cloud",
                "Automation",
              ]}
            />

          </div>

        </div>

        {/* <Timeline /> */}

      </div>
    </section>
  );
}