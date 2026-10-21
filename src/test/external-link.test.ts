import { afterEach, describe, expect, it, vi } from 'vitest';
import type { MouseEvent } from 'react';
import { openExternalLink } from '@/lib/external-link';

afterEach(() => vi.restoreAllMocks());

describe('original LinkedIn links', () => {
  it.each([
    'https://lnkd.in/p/did8F4UZ',
    'https://lnkd.in/p/dC26Y5nZ',
    'https://lnkd.in/p/dw_zAn3c',
    'https://lnkd.in/p/dSHE9Hxp',
    'https://lnkd.in/p/dy6g5fMN',
  ])('opens %s unchanged in a separate tab', (href) => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const preventDefault = vi.fn();
    const stopPropagation = vi.fn();
    const anchor = document.createElement('a');
    anchor.href = href;
    openExternalLink({ button: 0, currentTarget: anchor, preventDefault, stopPropagation } as unknown as MouseEvent<HTMLAnchorElement>);
    expect(open).toHaveBeenCalledWith(href, '_blank', 'noopener,noreferrer');
    expect(preventDefault).toHaveBeenCalledOnce();
    expect(stopPropagation).toHaveBeenCalledOnce();
  });
});