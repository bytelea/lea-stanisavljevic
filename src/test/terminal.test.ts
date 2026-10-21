import { describe, it, expect } from 'vitest';
import { runCommand, themes } from '@/lib/terminal';
import { featuredProjects } from '@/data/portfolio';
describe('Portfolio interactions', () => {
  it('supports light and dark themes only', () => {
    for (const theme of ['light', 'dark']) expect(runCommand(`theme ${theme}`).theme).toBe(theme);
    expect(runCommand('theme invalid').theme).toBeUndefined();
  });
  it('no longer offers a pastel theme', () => {
    expect(runCommand('pastel').theme).toBeUndefined();
    expect(runCommand('theme pastel').text).toContain('light or dark');
    expect(themes).not.toContain('pastel');
  });
  it('accepts the singular project command from the screenshot', () => {
    expect(runCommand('project')).toEqual(runCommand('projects'));
    expect(runCommand('project').text).toContain('propertyscan');
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
