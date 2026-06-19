export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}