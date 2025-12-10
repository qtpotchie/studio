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
      d="M19 8C19 6.89543 18.1046 6 17 6H7C5.89543 6 5 6.89543 5 8V14C5 15.1046 5.89543 16 7 16H17C18.1046 16 19 15.1046 19 14V8Z" 
      stroke="#166534"
      strokeWidth="1.5"
    />
    <circle cx="9.5" cy="11" r="1.5" fill="#166534" />
    <circle cx="14.5" cy="11" r="1.5" fill="#166534" />
    
    <path 
      d="M5 12L3 12"
      stroke="#166534"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path 
      d="M19 12L21 12"
      stroke="#166534"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path 
      d="M9 16V18C9 18.5523 8.55228 19 8 19H7"
      stroke="#166534"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path 
      d="M15 16V18C15 18.5523 15.4477 19 16 19H17"
      stroke="#166534"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path 
      d="M12 16V20"
      stroke="#166534"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.5 20H14.5"
      stroke="#166534"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    <rect x="8" y="4" width="2" height="2" rx="1" fill="#166534"/>
    <rect x="14" y="4" width="2" height="2" rx="1" fill="#166534"/>
  </svg>
);

export default Logo;
