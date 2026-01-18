export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/brand/logotype-dark-color.svg"
      alt="Skyhook"
      className={className}
    />
  );
}
