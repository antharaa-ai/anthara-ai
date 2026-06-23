"use client";

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Base Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.05),transparent_45%)]
        "
      />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <g
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        >
          <path d="M-50 520 C180 280 420 740 650 520 S1100 280 1650 520" />
          <path d="M-50 550 C180 310 420 770 650 550 S1100 310 1650 550" />
          <path d="M-50 580 C180 340 420 800 650 580 S1100 340 1650 580" />
          <path d="M-50 610 C180 370 420 830 650 610 S1100 370 1650 610" />
          <path d="M-50 640 C180 400 420 860 650 640 S1100 400 1650 640" />
          <path d="M-50 670 C180 430 420 890 650 670 S1100 430 1650 670" />
          <path d="M-50 700 C180 460 420 920 650 700 S1100 460 1650 700" />
          <path d="M-50 730 C180 490 420 950 650 730 S1100 490 1650 730" />
        </g>

        <g
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        >
          <path d="M-50 350 C280 100 450 600 850 350 S1200 100 1650 350" />
          <path d="M-50 380 C280 130 450 630 850 380 S1200 130 1650 380" />
          <path d="M-50 410 C280 160 450 660 850 410 S1200 160 1650 410" />
          <path d="M-50 440 C280 190 450 690 850 440 S1200 190 1650 440" />
          <path d="M-50 470 C280 220 450 720 850 470 S1200 220 1650 470" />
        </g>

        <g
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        >
          <ellipse
            cx="350"
            cy="700"
            rx="180"
            ry="120"
          />
          <ellipse
            cx="350"
            cy="700"
            rx="220"
            ry="150"
          />
          <ellipse
            cx="350"
            cy="700"
            rx="260"
            ry="180"
          />

          <ellipse
            cx="920"
            cy="420"
            rx="180"
            ry="120"
          />
          <ellipse
            cx="920"
            cy="420"
            rx="240"
            ry="170"
          />
          <ellipse
            cx="920"
            cy="420"
            rx="300"
            ry="220"
          />
        </g>
      </svg>

      {/* Center Ambient Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-white/[0.02]
          blur-[140px]
        "
      />

      {/* Bottom Left Orb */}
      <div
        className="
          absolute
          left-[15%]
          bottom-[12%]
          w-[180px]
          h-[180px]
          rounded-full
          border
          border-white/5
        "
      />

      <div
        className="
          absolute
          left-[15%]
          bottom-[12%]
          w-[80px]
          h-[80px]
          rounded-full
          bg-white/[0.04]
          blur-3xl
        "
      />
    </div>
  );
}