import { describe, it, expect } from 'vitest';
import { runCommand } from '@/lib/terminal';
import { featuredProjects } from '@/data/portfolio';
describe('Portfolio interactions', () => {
  it('supports all three requested themes', () => {
    for (const theme of ['light', 'dark', 'pastel']) expect(runCommand(`theme ${theme}`).theme).toBe(theme);
    expect(runCommand('theme invalid').theme).toBeUndefined();
  });
  it('opens each primary project on a refresh-safe root URL', () => {
    expect(runCommand('open propertyscan').destination).toBe('/?project=propertyscan');
    expect(runCommand('open crescend').destination).toBe('/?project=crescend');
    expect(runCommand('open eternal-blooms').destination).toBe('/?project=eternal-blooms');
    expect(runCommand('open missing').destination).toBeUndefined();
  });
  it('keeps Semester Radar separate from the three primary projects', () => {
    expect(featuredProjects.map(p => p.name)).toEqual(['PropertyScan', 'Crescend', 'Eternal Blooms']);
  });
  it('does not invent a Crescend stack or external links', () => {
    const project = featuredProjects.find(p => p.slug === 'crescend');
    expect(project?.github).toBeUndefined();
    expect(project?.live).toBeUndefined();
    expect(project?.tags).toEqual(['Social discovery', 'Music', 'Product design']);
  });
  it('clears output without navigation', () => {
    expect(runCommand('clear')).toEqual({ text: '', clear: true });
  });
});
