import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon: any;
}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, ...props }, ref) => {
    const StartIcon = startIcon;

    return (
      <div className="flex-auto w-0 relative">
        <Input
          type={type}
          className={cn(
            startIcon ? 'pl-10' : '',
            className
          )}
          ref={ref}
          placeholder="Search"
          {...props}
        />
        {StartIcon && (
          <StartIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 peer-focus:text-gray-900" />
        )}
      </div>
    );
  }
);

Search.displayName = 'Search';

export { Search };
