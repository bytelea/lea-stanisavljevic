import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Maximize2, CornerDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { runCommand } from '@/lib/terminal';
import { usePortfolio } from './PortfolioProvider';

type Entry = { command: string; output: string };
export default function Terminal({ expanded = false }: { expanded?: boolean }) {
  const { setTheme, openTerminal } = usePortfolio();
  const navigate = useNavigate();
  const [entries, setEntries] = useState<Entry[]>([{ command: 'help', output: runCommand('help').text }]);
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { const output = outputRef.current; if (output) output.scrollTop = output.scrollHeight; }, [entries]);
  useEffect(() => { if (expanded) inputRef.current?.focus(); }, [expanded]);
  function submit(event: React.FormEvent) {
    event.preventDefault(); if (!input.trim()) return;
    const result = runCommand(input);
    setEntries(previous => result.clear ? [] : [...previous, { command: input, output: result.text }]);
    if (result.theme) setTheme(result.theme);
    if (result.destination) navigate(result.destination);
    setInput(''); setHistoryIndex(-1);
  }
  return <div className={`portfolio-terminal ${expanded ? 'expanded' : ''}`}>
    <div className="terminal-titlebar"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span>lea@portfolio ~</span>{!expanded && <Button variant="ghost" size="icon" onClick={openTerminal} aria-label="Expand terminal" title="Expand terminal"><Maximize2 size={13} /></Button>}</div>
    <div className="terminal-output" ref={outputRef} role="log" aria-live="polite"><p>Welcome to my little corner of the internet <span className="terminal-heart">♡</span></p><p className="terminal-muted">A little curiosity goes a long way.</p>{entries.map((entry, i) => <div key={i} className="terminal-entry"><p><span className="terminal-prompt">lea@portfolio</span> ~ % {entry.command}</p><pre>{entry.output}</pre></div>)}</div>
    <form onSubmit={submit} className="terminal-input"><label htmlFor={expanded ? 'terminal-expanded' : 'terminal-preview'}>lea@portfolio <span>~ %</span></label><input ref={inputRef} id={expanded ? 'terminal-expanded' : 'terminal-preview'} aria-label={expanded ? 'Terminal command' : 'Preview terminal command'} autoComplete="off" autoCapitalize="off" spellCheck={false} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'ArrowUp') { e.preventDefault(); const next = Math.min(historyIndex + 1, entries.length - 1); setHistoryIndex(next); setInput(entries[entries.length - 1 - next]?.command ?? ''); } if (e.key === 'ArrowDown') { e.preventDefault(); const next = Math.max(-1, historyIndex - 1); setHistoryIndex(next); setInput(next < 0 ? '' : entries[entries.length - 1 - next]?.command ?? ''); } }} /><Button type="submit" variant="ghost" size="icon" aria-label="Run command" title="Run command"><CornerDownLeft size={14} /></Button></form>
  </div>;
}
