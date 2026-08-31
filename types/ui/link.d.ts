import type { ComponentProps } from 'react';
import Link from 'next/link';

export type TouchLinkProps = ComponentProps<typeof Link> & {
  touchActiveClass?: string;
  touchInactiveClass?: string;
};