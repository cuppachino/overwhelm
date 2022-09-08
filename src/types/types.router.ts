import type { Remap } from '@/types/types.common';
import type { Route } from '@tanstack/react-location';

export type To = string | number | null | undefined;

type RouteExtras = {
  path: string;
  label?: string;
  description?: string;
};

export type ModifiedRoute = Remap<RouteExtras & Omit<Route, 'path'>>;

export type NavbarProps = { routes?: ModifiedRoute[] };

export type NavLinkProps = { to: To; label: string };
