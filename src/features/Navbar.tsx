import type { ModifiedRoute, NavbarProps } from '@/types/types.router';
import { NavLink } from '@/features/NavLink';

export const Navbar = ({ routes = [] }: NavbarProps) => (
  <nav className='flex gap-2.5 px-2.5 py-1.5 font-mp-sans font-normal text-sm text-mono-4'>
    {routes.map(toNavLink)}
  </nav>
);

function toNavLink(route: ModifiedRoute, index: number) {
  if (!route.label) return null;
  return <NavLink to={route.path} label={route.label} key={`NavLink-{${index}}-{${route.path}}`} />;
}
