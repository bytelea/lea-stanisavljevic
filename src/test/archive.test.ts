import { describe, expect, it } from 'vitest';
import { highlights, featuredProjects, upcoming } from '@/data/portfolio';

describe('archive selection', () => {
  it('keeps Florist Studio in featured projects, not Beyond the Screen', () => {
    expect(highlights.some(entry => entry.title === 'Florist Studio')).toBe(false);
    expect(featuredProjects.some(entry => entry.name === 'Florist Studio')).toBe(true);
  });

  it('keeps SAP in experience, not Beyond the Screen', () => {
    expect(upcoming.organisation).toBe('SAP');
    expect(highlights.some(entry => /SAP/.test(entry.title))).toBe(false);
  });

  it('shows only the first Dublin AI Week photo', () => {
    const entry = highlights.find(entry => entry.title === 'Dublin AI Week');
    expect(entry?.images).toHaveLength(1);
    expect(entry?.images?.[0]).toContain('pressure-cooker-crowd');
  });
});