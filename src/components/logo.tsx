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
      d="M19.5 21C19.5 21 16.5 19.5 12 19.5C7.5 19.5 4.5 21 4.5 21"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 3C19.5 3 16.5 4.5 12 4.5C7.5 4.5 4.5 3 4.5 3"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 3V21"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 3V21"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="4.5"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
    />
    <path
      d="M15.5 15.5L18 18"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
