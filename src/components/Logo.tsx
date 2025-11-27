export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/logos/skyhook.svg"
      alt="Skyhook"
      className={className}
    />
  );
}
