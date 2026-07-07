"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

/**
 * Anthara logo intro — a small story arc rather than a straight logo
 * reveal:
 *   1. Spark    — a single point breathes at center (0 - 0.9s)
 *   2. Ignition — 8 real logo blades burst outward, then arc back in,
 *                 spinning down, and lock into the exact mark (0.9 - 2.65s)
 *   3. Signature— "ANTHARA" writes in letter by letter (2.85 - 3.7s)
 *   4. Pillars  — INTELLIGENCE / DISCOVERY / IMPACT each get their own
 *                 held, centered moment (3.95 - 8.9s)
 *   5. Settle   — everything collapses into the compact final lockup
 *                 (8.95 - 9.75s)
 *   6. Release  — fades/pushes out to reveal the site (9.75 - 10.7s)
 *
 * Built with Framer Motion, already a dependency of this project.
 * Usage: render <LogoIntro /> once in app/layout.tsx, as a sibling of
 * {children} inside <body>.
 */

const CENTER = { x: 818, y: 798.5 };

type Blade = { id: string; d: string; dx: number; dy: number; spin: number; delay: number };

// Real logo, split into 8 blade pieces at their natural notch points.
// See build notes at the bottom for how these were derived.
const BLADES: Blade[] = [
  { id: "b0", d: "M 816.0,801.5 L 771.5,848.0 L 753.5,874.0 L 737.5,910.0 L 745.5,926.0 L 742.5,940.0 L 584.0,1034.5 L 684.5,850.0 L 818.0,798.5 Z", dx: -338, dy: 341, spin: 300, delay: 0.0 },
  { id: "b1", d: "M 684.5,850.0 L 477.5,800.0 L 656.0,755.5 L 675.0,764.5 L 720.0,764.5 L 815.5,797.0 L 818.0,798.5 Z", dx: -480, dy: 2, spin: -300, delay: 0.04 },
  { id: "b2", d: "M 815.5,797.0 L 777.0,757.5 L 740.0,730.5 L 709.0,717.5 L 690.0,726.5 L 676.0,722.5 L 582.5,564.0 L 586.0,562.5 L 766.0,666.5 L 818.0,798.5 Z", dx: -340, dy: -339, spin: 300, delay: 0.08 },
  { id: "b3", d: "M 766.0,666.5 L 817.0,459.5 L 860.5,632.0 L 853.5,655.0 L 853.5,697.0 L 818.0,798.5 Z", dx: -1, dy: -480, spin: -300, delay: 0.12 },
  { id: "b4", d: "M 818.0,798.5 L 863.5,751.0 L 885.5,719.0 L 897.5,690.0 L 889.5,671.0 L 892.5,657.0 L 1050.0,562.5 L 1049.5,571.0 L 950.5,747.0 L 818.0,798.5 Z", dx: 336, dy: -342, spin: 300, delay: 0.16 },
  { id: "b5", d: "M 950.5,747.0 L 1157.5,798.0 L 982.0,842.5 L 960.0,833.5 L 931.0,835.5 L 909.0,831.5 L 820.0,801.5 L 818.0,798.5 Z", dx: 480, dy: -1, spin: -300, delay: 0.2 },
  { id: "b6", d: "M 820.0,801.5 L 859.0,842.5 L 899.0,869.5 L 925.0,880.5 L 946.0,871.5 L 961.0,876.5 L 1052.5,1034.0 L 869.0,931.5 L 818.0,798.5 Z", dx: 339, dy: 340, spin: 300, delay: 0.24 },
  { id: "b7", d: "M 869.0,931.5 L 818.0,1137.5 L 774.5,965.0 L 782.5,945.0 L 778.5,924.0 L 782.5,896.0 L 816.0,801.5 L 818.0,798.5 Z", dx: 0, dy: 480, spin: -300, delay: 0.28 },
];

// Pixel-accurate single path, crossfaded in the instant the pieces lock.
const FINAL_MARK_D =
  "M 818.0,1137.5 L 774.5,965.0 L 782.5,945.0 L 778.5,924.0 L 782.5,896.0 L 816.0,801.5 L 771.5,848.0 L 753.5,874.0 L 737.5,910.0 L 745.5,926.0 L 742.5,940.0 L 584.0,1034.5 L 684.5,850.0 L 477.5,800.0 L 656.0,755.5 L 675.0,764.5 L 720.0,764.5 L 815.5,797.0 L 777.0,757.5 L 740.0,730.5 L 709.0,717.5 L 690.0,726.5 L 676.0,722.5 L 582.5,564.0 L 586.0,562.5 L 766.0,666.5 L 817.0,459.5 L 860.5,632.0 L 853.5,655.0 L 853.5,697.0 L 818.0,798.5 L 863.5,751.0 L 885.5,719.0 L 897.5,690.0 L 889.5,671.0 L 892.5,657.0 L 1050.0,562.5 L 1049.5,571.0 L 950.5,747.0 L 1157.5,798.0 L 982.0,842.5 L 960.0,833.5 L 931.0,835.5 L 909.0,831.5 L 820.0,801.5 L 859.0,842.5 L 899.0,869.5 L 925.0,880.5 L 946.0,871.5 L 961.0,876.5 L 1052.5,1034.0 L 869.0,931.5 L 818.0,1137.5 Z";

const LETTERS = "ANTHARA".split("");
const PILLARS = ["INTELLIGENCE", "DISCOVERY", "IMPACT"];

const SPARK_GONE_AT = 900;
const LOCK_AT = 2650;
const WORDMARK_START = 2850;
const PILLAR_START = 3950;
const PILLAR_DURATION = 1600; // visible time per pillar word
const PILLAR_GAP = 1600; // gap before next pillar starts
const SETTLE_AT = PILLAR_START + PILLARS.length * PILLAR_GAP; // ~8950
const TOTAL_MS = 10700;

// Plays on every full page load/refresh by design (no sessionStorage
// gate). A full refresh remounts the root layout anyway, so this is
// the whole mechanism — nothing extra needed to "reset" it. If you
// later want it to show only once per browser session instead, see
// the commented block inside the effect below.

const bladeVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.15, rotate: 0 },
  visible: (b: Blade) => ({
    opacity: [0, 1, 1, 1],
    x: [0, 0, b.dx, 0],
    y: [0, 0, b.dy, 0],
    scale: [0.15, 0.15, 1.12, 1],
    rotate: [0, 0, b.spin, 0],
    transition: {
      duration: 1.75,
      delay: 0.9 + b.delay,
      times: [0, 0.18, 0.44, 1],
      ease: ["easeOut", "easeInOut", "easeOut"],
    },
  }),
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: (WORDMARK_START + i * 120) / 1000, ease: "easeOut" },
  }),
};

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: [0, 1, 1, 0],
    y: [6, 0, 0, 0],
    transition: {
      duration: PILLAR_DURATION / 1000,
      delay: (PILLAR_START + i * PILLAR_GAP) / 1000,
      times: [0, 0.18, 0.8, 1],
      ease: "easeInOut",
    },
  }),
};

export default function LogoIntro() {
  const [shouldRender, setShouldRender] = useState(false);
  const [locked, setLocked] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setReduced(prefersReduced);
    setShouldRender(true);

    if (prefersReduced) {
      setLocked(true);
      const dismiss = setTimeout(() => setLeaving(true), 1600);
      return () => clearTimeout(dismiss);
    }

    const lockTimer = setTimeout(() => setLocked(true), LOCK_AT);
    const dismissTimer = setTimeout(() => setLeaving(true), TOTAL_MS);
    return () => {
      clearTimeout(lockTimer);
      clearTimeout(dismissTimer);
    };

    /* To instead show it only once per browser session (e.g. if the
       10.7s runtime feels like too much on every refresh later), swap
       the block above for:

       const SESSION_KEY = "antharaIntroShown";
       if (sessionStorage.getItem(SESSION_KEY)) { setShouldRender(false); return; }
       sessionStorage.setItem(SESSION_KEY, "1");
       ...then the rest as above.
    */
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => setShouldRender(false)}>
      {!leaving && (
        <motion.div
          key="intro"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 1, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#F7F5EF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative" }}>

            {/* Act 0 — spark */}
            {!reduced && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: SPARK_GONE_AT / 1000, duration: 0.15 }}
                style={{ position: "absolute", top: 95, left: "50%", marginLeft: -7, width: 14, height: 14 }}
              >
                <motion.div
                  animate={{ scale: [0.55, 1, 0.55, 1], opacity: [0.55, 1, 0.55, 1] }}
                  transition={{ duration: 0.9, times: [0, 0.25, 0.5, 0.75], repeat: 0 }}
                  style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#141311" }}
                />
                <motion.div
                  initial={{ width: 14, height: 14, opacity: 0.6, marginLeft: 0, marginTop: 0 }}
                  animate={{ width: 70, height: 70, opacity: 0, marginLeft: -28, marginTop: -28 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  style={{ position: "absolute", left: 0, top: 0, borderRadius: "50%", border: "1px solid #141311" }}
                />
              </motion.div>
            )}

            {/* Act 1+2 — ignition burst, then formation */}
            <div style={{ position: "relative", width: 190, height: 190 }}>
              <svg
                viewBox="0 0 1600 1600"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", opacity: reduced || locked ? 0 : 1, transition: "opacity 0.18s ease" }}
              >
                {BLADES.map((b) => (
                  <motion.path
                    key={b.id}
                    d={b.d}
                    fill="#141311"
                    custom={b}
                    variants={bladeVariants}
                    initial={reduced ? undefined : "hidden"}
                    animate={reduced ? undefined : "visible"}
                    style={{ transformBox: "view-box", transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
                  />
                ))}
              </svg>

              <svg viewBox="0 0 1600 1600" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                <path
                  d={FINAL_MARK_D}
                  fill="#141311"
                  style={{ opacity: reduced || locked ? 1 : 0, transition: "opacity 0.25s ease" }}
                />
              </svg>

              {locked && !reduced && (
                <motion.div
                  initial={{ width: 40, height: 40, opacity: 0.85 }}
                  animate={{ width: 260, height: 260, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ position: "absolute", top: "50%", left: "50%", marginLeft: -20, marginTop: -20, border: "1px solid #141311", borderRadius: "50%", pointerEvents: "none" }}
                />
              )}
            </div>

            {/* Act 3 — signature */}
            <div style={{ marginTop: 16, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 38, letterSpacing: 14, color: "#141311", display: "flex" }}>
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial={reduced ? "visible" : "hidden"}
                  animate="visible"
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Act 4 — the three pillars, told one at a time */}
            {!reduced && (
              <div style={{ position: "relative", height: 34, marginTop: 26, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {PILLARS.map((word, i) => (
                  <motion.div
                    key={word}
                    custom={i}
                    variants={pillarVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ position: "absolute", fontSize: 15, letterSpacing: 7, color: "#141311", whiteSpace: "nowrap" }}
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Act 5 — settle into the compact final lockup */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 150, opacity: 1 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : SETTLE_AT / 1000, ease: "easeOut" }}
              style={{ height: 1, background: "#141311", margin: "16px 0 12px" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : (SETTLE_AT + 200) / 1000, ease: "easeOut" }}
              style={{ fontSize: 11, letterSpacing: 3, color: "#5A584F" }}
            >
              INTELLIGENCE&nbsp;&nbsp;·&nbsp;&nbsp;DISCOVERY&nbsp;&nbsp;·&nbsp;&nbsp;IMPACT
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/*
BUILD NOTES

Blade pieces: derived by walking the real logo's outline (a single
closed SVG path in a 1600x1600 viewBox centered at 818,798.5),
computing each point's radius from center, and cutting at the 8 local
minima of that radius sequence (the notches between blades). Each
segment is closed into a polygon with a line back to center. The
union of the 8 pieces is a very close but not pixel-perfect match to
the original near the hub, so the exact FINAL_MARK_D path is layered
underneath and crossfaded in the instant the pieces lock (see the
`locked` state).

Timing constants at the top (SPARK_GONE_AT, LOCK_AT, WORDMARK_START,
PILLAR_START, etc.) are all in milliseconds and drive both the inline
style transitions above and the setTimeout calls in the effect —
change them there rather than hunting through JSX.
*/