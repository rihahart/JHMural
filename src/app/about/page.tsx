export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[var(--color-background-brand)]">
      <div className="text-center">
        <h1 className="text-[clamp(3rem,5vw,4rem)] font-bold text-[var(--color-content-primary-inverse)] mb-[var(--spacing-m)]">
          About Us
        </h1>
        <p className="text-[clamp(1.5rem,2vw,2rem)] text-[var(--color-content-primary-inverse)] mb-[var(--spacing-s)]">
          Coming Soon
        </p>
        <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-[var(--color-content-secondary-inverse)]">
          We are under construction
        </p>
      </div>
    </div>
  );
} 