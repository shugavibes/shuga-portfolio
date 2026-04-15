import { content } from '@/content.config';

export const dynamic = 'force-static';

export function GET() {
  const { identity, work, ideas, misc, connect } = content;

  const lines: string[] = [];

  lines.push(`# ${identity.name}`);
  lines.push(`**${identity.label}**`);
  lines.push('');
  lines.push('Product leader from Argentina. 10 years building technology products for humans. Now also for agents.');
  lines.push('');

  // Experience
  lines.push('---');
  lines.push('');
  lines.push('## Experience');
  lines.push('');

  for (const job of work) {
    lines.push(`### ${job.company}`);
    lines.push(`**${job.role}** · ${job.dates}`);
    lines.push('');
    for (const bullet of job.bullets) {
      lines.push(`- ${bullet}`);
    }
    lines.push('');
    lines.push(`> ${job.backContent}`);
    lines.push('');
  }

  // Ideas
  lines.push('---');
  lines.push('');
  lines.push('## Ideas & Writing');
  lines.push('');

  for (const idea of ideas) {
    lines.push(`- [${idea.title}](${idea.url})`);
  }
  lines.push('');

  // Misc
  lines.push('---');
  lines.push('');
  lines.push('## Notable');
  lines.push('');

  for (const item of misc) {
    const link = item.url ? `[${item.text}](${item.url})` : item.text;
    lines.push(`- ${link}`);
  }
  lines.push('');

  // Connect
  lines.push('---');
  lines.push('');
  lines.push('## Connect');
  lines.push('');

  for (const link of connect) {
    lines.push(`- [${link.label}](${link.url})`);
  }
  lines.push('');

  const markdown = lines.join('\n');

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
