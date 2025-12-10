export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/brand/logotype-dark.svg"
      alt="Skyhook"
      className={className}
    />
  );
}
