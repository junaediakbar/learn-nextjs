import Link from 'next/link';
import { ReactElement } from 'react';

interface UnstyledLinkProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
}
export default function UnstyledLink({
  children,
  href,
  ...rest
}: UnstyledLinkProps) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link {...rest} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a target='_blank' rel='noopener noreferrer' href={href} {...rest}>
      {children}
    </a>
  );
}
