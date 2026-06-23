"use client";

import CountUp from "react-countup";

interface Props {
  number: string;
  title: string;
}

export default function MetricCard({ number, title }: Props) {
  return (
    <div
      className="
      border border-white/10
      rounded-2xl
      p-6
      text-center
    "
    >
      <div className="text-4xl font-bold">
        {number.includes("+") ? (
          <>
            <CountUp end={parseInt(number)} duration={2} />+
          </>
        ) : (
          number
        )}
      </div>

      <p className="text-white/60 mt-2">{title}</p>
    </div>
  );
}