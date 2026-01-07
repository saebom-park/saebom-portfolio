export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 border-l-2 border-blue-500 pl-4">
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-1 text-zinc-500 font-mono text-sm">{subtitle}</p> : null}
    </div>
  );
}
