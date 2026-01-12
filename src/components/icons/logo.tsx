
import { HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  iconClassName?: string;
};

export function Logo({ className, iconClassName }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <img
        src="/Movilo/Logotipo/Imagotipo 1.png"
        alt="Movilo Club"
        className={cn('h-8 w-auto', iconClassName)}
      />
    </div>
  );
}

