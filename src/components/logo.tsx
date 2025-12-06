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
      d="M4 4.5V19.5C4 19.7761 4.22386 20 4.5 20H11.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 4.5V19.5C20 19.7761 19.7761 20 19.5 20H12.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 4.5V19.5"
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
      d="M17.5 13.5L20 16"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
