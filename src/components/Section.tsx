export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 sm:py-14">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
