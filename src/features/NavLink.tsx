import type { NavLinkProps } from '@/types/types.router';
import { Link } from '@tanstack/react-location';

export function NavLink({ to, label }: NavLinkProps) {
  return (
    <Link
      to={to}
      className='inline-flex h-7 min-w-[64px] items-center justify-center px-2.5 pb-0.5 border rounded-md box-content'
      getActiveProps={() => ({
        className: 'text-black font-medium',
      })}
      getInactiveProps={() => ({
        className: 'text-mono-4 font-normal',
      })}>
      {label}
    </Link>
  );
}
