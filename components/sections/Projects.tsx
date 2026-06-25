"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  return (
    <section id="work" className="py-40 bg-[#FFFFFF] relative overflow-hidden">

      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square watermark pointer-events-none opacity-[0.03]">
        <Image
          src="/AntharaLogo_converted.svg"
          alt=""
          fill
          className="object-contain brightness-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div className="mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-black/30 text-[14px] font-bold mb-4"
          >
            SELECTED WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter leading-tight text-black"
          >
            Engineering Products
            <br />
            That Create Impact.
          </motion.h2>
        </div>

        <div className="space-y-48">

          <FeaturedProject
            title="CareBridge AI"
            industry="Healthcare Technology"
            role="AI Architecture & Engineering"
            timeline="12 Weeks"
            watermark="CAREBRIDGE"
            challenge="Insurance policies are difficult for patients to understand, leading to claim confusion and delayed action."
            solution="Designed an AI-powered insurance intelligence platform using RAG, policy reasoning, and structured data validation."
            impact={[
              "Faster policy interpretation",
              "Reduced support dependency",
              "Structured claim intelligence",
              "Improved decision confidence"
            ]}
            stack={["FastAPI", "Next.js", "Gemma", "Docker", "FAISS"]}
            video="/videos/Carebridge1.mp4"
            github="https://github.com/AVP2011/CareBridge_AI"
            dark={false}
          />

          <FeaturedProject
            title="Medicare Hub"
            industry="Digital Healthcare"
            role="Full Stack & Product Engineering"
            timeline="10 Weeks"
            watermark="MEDICARE"

            challenge="Healthcare services are often fragmented across multiple systems, creating barriers for patients seeking medical information, consultations, and healthcare support."

            solution="Built an end-to-end digital healthcare ecosystem that empowers users with health calculators, hospital discovery, community interaction, and personalized healthcare management through dedicated patient and provider portals."

            impact={[
              "Improved accessibility to healthcare information",
              "Streamlined patient-provider interactions",
              "Fostered community-driven healthcare engagement",
              "Delivered an integrated digital health experience"
            ]}

            stack={[
              "React",
              "React Native",
              "Express.js",
              "MongoDB",
              "Node.js",
              "Tailwind CSS",
              "Google Maps",
              "JWT",
              "REST APIs",
              "Docker"
            ]}
            video="/videos/medicare1.mp4"
            github="https://github.com/Risaabhhhhh/medicare-hub"
            reverse
            dark={false}
          />

          <FeaturedProject
            title="AlphaLens"
            industry="Financial Technology"
            role="Full Stack AI Engineering"
            timeline="10 Weeks"
            watermark="ALPHALENS"

            challenge="Retail investors often struggle to interpret the overwhelming volume of financial news and market signals, making timely investment decisions difficult."

            solution="Built an AI-powered financial intelligence platform available on both web and mobile, capable of aggregating real-time market news, performing sentiment analysis, generating trading signals, and delivering actionable insights through an intuitive dashboard."

            impact={[
              "Accelerated financial news analysis",
              "Generated AI-driven market signals",
              "Improved retail investor decision-making",
              "Unified market intelligence across web and mobile platforms"
            ]}

            stack={[
              "FastAPI",
              "React",
              "React Native",
              "XGBoost",
              "FinBERT",
              "spaCy",
              "MongoDB",
              "Python",
              "Docker"
            ]}
            video="/videos/Alphalens1.mp4"
            github="https://github.com/Risaabhhhhh/AlphaLens"
            dark={false}
          />

          <FeaturedProject
            title="VayuVastra"
            industry="Climate Technology"
            role="AI & Full Stack Engineering"
            timeline="8 Weeks"
            watermark="VAYUVASTRA"

            challenge="Urban administrations struggle to monitor and manage pollution at a granular level due to fragmented environmental data and limited citizen engagement."

            solution="Engineered an intelligent environmental intelligence platform that combines real-time AQI data, geospatial analytics, and civic participation tools to provide actionable ward-level air quality insights for both citizens and government agencies."

            impact={[
              "Delivered hyperlocal environmental intelligence",
              "Enhanced transparency in pollution monitoring",
              "Enabled data-driven governance decisions",
              "Strengthened citizen-government collaboration"
            ]}

            stack={[
              "Next.js",
              "Flask",
              "MongoDB Atlas",
              "Leaflet",
              "GeoJSON",
              "WAQI API",
              "Tailwind CSS",
              "JWT",
              "Docker"
            ]}
            video="/videos/Vayuvastra1.mp4"
            github="https://github.com/GRINDWUS/VayuVastra"

            dark={false}
          />

        </div>

      </div>
    </section>
  );
}
