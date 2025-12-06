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
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    <path
      d="M4 19.5C4 18.5 4 17.5 4 16C4 12 7.5 11 12 11C16.5 11 20 12 20 16C20 17.5 20 18.5 20 19.5M4 19.5C4 20.5 4 21.5 4 22H20V19.5M4 19.5V4H20V19.5"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 14.5L10.5 16L8.5 17.5"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 18H15.5"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;
