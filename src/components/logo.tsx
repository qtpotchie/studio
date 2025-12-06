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
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H9.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3V11.5C12 11.7761 12.2239 12 12.5 12H21V5C21 3.9 20.1 3 19 3H12Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="16.5"
      cy="16.5"
      r="3"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
    />
    <path
      d="M21 21L18.8 18.8"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
