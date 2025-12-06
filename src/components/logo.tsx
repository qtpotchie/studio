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
      d="M4 19.5V4.5C4 4.22386 4.22386 4 4.5 4H11.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 19.5V4.5C20 4.22386 19.7761 4 19.5 4H12.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="16"
      cy="10"
      r="3"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
    />
    <path
      d="M16 8V12"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
