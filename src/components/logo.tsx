import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={cn(className)}
    width="32"
    height="32"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Jargon Decoder Logo"
  >
    <path
      d="M20 20V80H45C64.33 80 80 64.33 80 45V20H55V45C55 50.523 50.523 55 45 55H20Z"
      fill="hsl(var(--primary))"
    />
    <rect x="20" y="20" width="35" height="10" fill="hsl(var(--background))" />
  </svg>
);

export default Logo;
