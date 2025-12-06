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
      d="M4 19.5C4 19.5 4 18.5 4 16C4 11.5 7.5 10.5 12 10.5C16.5 10.5 20 11.5 20 16C20 18.5 20 19.5 20 19.5M4 19.5C4 19.5 4 20.5 4 21C4 21.5 4.5 22 5 22H19C19.5 22 20 21.5 20 21C20 20.5 20 19.5 20 19.5M4 19.5V4.5C4 4.22386 4.22386 4 4.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19.5" 
      stroke="hsl(var(--foreground))" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 4.5V10.5" 
      stroke="hsl(var(--foreground))" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M7.5 13L9.5 15L7.5 17" 
      stroke="hsl(var(--primary))" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M14.5 17H16.5" 
      stroke="hsl(var(--primary))" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;
