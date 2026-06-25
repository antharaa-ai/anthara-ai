interface Props {
  title: string;
  achievement: string;
  description: string;
  tech: string[];
  
}

export default function InnovationCard({
  title,
  achievement,
  description,
  tech,
}: Props) {
  return (
    <div
      className="
      border border-white/10
      rounded-3xl
      p-8
      bg-white/[0.02]
      hover:bg-white/[0.04]
      transition-all
    "
    >
      <p className="text-white/40 text-sm">
        {achievement}
      </p>

      <h3 className="text-2xl font-semibold mt-2">
        {title}
      </h3>

      <p className="mt-4 text-white/60 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((item) => (
          <span
            key={item}
            className="
            px-3 py-1
            border border-white/10
            rounded-full
            text-xs
          "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}