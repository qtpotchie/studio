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
    <path d="M6 8L2 12L6 16" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 8L22 12L18 16" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 6H10V18H14V6Z" fill="hsl(var(--primary))" fillOpacity="0.8" />
  </svg>
);

export default Logo;
