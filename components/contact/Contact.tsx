"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactBackground from "./ContactBackground";
import {
    Mail,
    Sparkles,
    Shield,
    ArrowRight,
} from "lucide-react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectType, setProjectType] = useState("ai-product");
    const [brief, setBrief] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    projectType,
                    brief,
                }),
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();

            if (data.success) {
                setSuccess(true);

                setName("");
                setEmail("");
                setProjectType("ai-product");
                setBrief("");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section
            id="contact"
            className="
        relative
        bg-[#050505]
        py-24
        md:py-40
        overflow-hidden
      "
        >
            <ContactBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className="
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
                >
                    {/* LEFT */}
                    <div>
                        <p
                            className="
                text-[12px]
                uppercase
                tracking-[0.25em]
                sm:tracking-[0.4em]
                text-white/30
                font-bold
                mb-6
              "
                        >
                            PROJECT INTAKE
                        </p>

                        <h2
                            className="
                text-[40px]
                sm:text-5xl
                md:text-7xl
                font-black
                Satoshi
                tracking-tight
                text-white
                leading-[0.95]
              "
                        >
                            Let’s Build The
                            <br />
                            System Behind
                            <br />
                            Your Next Move.
                        </h2>

                        <p
                            className="
                mt-8
                text-white/60
                text-base
                md:text-lg
                max-w-xl
                leading-relaxed
              "
                        >
                            Tell us what you&apos;re trying to automate,
                            scale, or launch.
                            Anthara engineers AI systems,
                            automation platforms, and
                            production-grade software.
                        </p>

                        <div className="mt-10 space-y-4 text-sm sm:text-base">

                            <div className="flex items-center gap-3 text-white/70">
                                <Mail size={18} />
                                <span>Discovery response within 24 hours</span>
                            </div>

                            <div className="flex items-center gap-3 text-white/70">
                                <Sparkles size={18} />
                                <span>AI Systems & Automation</span>
                            </div>

                            <div className="flex items-center gap-3 text-white/70">
                                <Shield size={18} />
                                <span>Architecture First Approach</span>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <motion.div
                        whileHover={{
                            y: -5,
                        }}
                        className="
              rounded-[24px]
              md:rounded-[32px]
              border
              border-white/10
              bg-black/50
              backdrop-blur-xl
              p-5
              sm:p-8
            "
                    >
                        <p
                            className="
                text-[10px]
                uppercase
                tracking-[0.22em]
                sm:tracking-[0.3em]
                text-white/30
                font-bold
                mb-6
              "
                        >
                            PROJECT INTAKE
                        </p>

                        <h3
                            className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                Satoshi
                text-white
                mb-8
              "
                        >
                            What should the
                            system solve?
                        </h3>

                        <div className="space-y-5">

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                className="
    w-full
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-4
    py-4
    text-white
  "
                            />

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="
    w-full
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-4
    py-4
    text-white
  "
                            />

                            <select
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="
    w-full
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-4
    py-4
    text-white
  "
                            >
                                <option value="ai-product" className="bg-black">
                                    AI Product
                                </option>

                                <option value="automation" className="bg-black">
                                    Automation
                                </option>

                                <option value="saas-platform" className="bg-black">
                                    SaaS Platform
                                </option>
                            </select><textarea
                                rows={5}
                                value={brief}
                                onChange={(e) => setBrief(e.target.value)}
                                placeholder="Describe the problem..."
                                className="
    w-full
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-4
    py-4
    text-white
  "
                            />

                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="
    w-full
    h-16
    rounded-full
    bg-white
    text-black
    font-bold
    flex
    items-center
    justify-center
    gap-3
    hover:scale-[1.02]
    transition-all
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
                            >
                                {loading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Start The Conversation
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                            {success && (
                                <div
                                    className="
      mt-4
      rounded-xl
      border
      border-emerald-500/20
      bg-emerald-500/5
      p-4
      text-sm
      text-emerald-300
    "
                                >
                                    Thank you. Your inquiry has been received.
                                    We&apos;ll review it and get back to you within 24 hours.
                                </div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
