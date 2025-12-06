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
      d="M4 4H20V6H13V18H11V6H4V4Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M11 18L20 18L11 8L13 8L22 18L22 20L4 20L13 10L11 10L2 20L2 18L11 18Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.6"
    />
  </svg>
);

export default Logo;
