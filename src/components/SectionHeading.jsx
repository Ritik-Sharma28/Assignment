export function SectionHeading({ eyebrow, title, className = '', align = 'left' }) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 ${
            align === 'center' ? 'text-center' : ''
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl font-semibold leading-[0.92] text-slate-950 sm:text-5xl lg:text-6xl ${
          align === 'center' ? 'text-center' : ''
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
