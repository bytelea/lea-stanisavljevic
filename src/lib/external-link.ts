import type { MouseEvent } from 'react';

// Open directly from the user's click rather than letting an embedded preview navigate.
export function openExternalLink(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  event.stopPropagation();
  window.open(event.currentTarget.href, '_blank', 'noopener,noreferrer');
}