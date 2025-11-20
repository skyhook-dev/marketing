export function GridPattern() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.4] text-border"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
