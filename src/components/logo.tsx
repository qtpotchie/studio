import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={cn(className)}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TechTermz Logo"
  >
    <path
      d="M4 19.5V4.5C4 4.22386 4.22386 4 4.5 4H14"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 19.5V4.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="14.5"
      cy="10.5"
      r="4"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
    />
    <path
      d="M12.5 10.5H16.5"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.5 8.5V12.5"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17.5 13.5L20 16"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
