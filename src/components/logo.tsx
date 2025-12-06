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
    <path d="M6 8L2 12L6 16" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 16L22 12L18 8" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="7" y="6" width="10" height="12" rx="1" fill="hsl(var(--primary))" fillOpacity="0.1" />
    <path d="M12 9V15M9 9H15" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12H7.5" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 15V17" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 17V15" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="15" y="7" width="2" height="2" rx="0.5" stroke="hsl(var(--primary))" strokeWidth="1" />
  </svg>
);

export default Logo;
