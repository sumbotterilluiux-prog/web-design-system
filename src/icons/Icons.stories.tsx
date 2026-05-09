import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { cn } from '../lib/cn';
import * as icons from './index';
import type { IconCategory, IconMeta, IconProps } from './types';

type IconComponent = ((props: IconProps) => React.JSX.Element) & { meta: IconMeta };

const allIcons: IconComponent[] = Object.values(icons).filter(
  (v): v is IconComponent =>
    typeof v === 'function' && 'meta' in v && (v as IconComponent).meta != null,
);

function groupByCategory(list: IconComponent[]) {
  const map = new Map<IconCategory, IconComponent[]>();
  for (const icon of list) {
    const cat = icon.meta.category;
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(icon);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function IconTile({ Icon }: { Icon: IconComponent }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'gap-[var(--gap-xs)] p-[var(--padding-md)]',
        'rounded-[var(--stroke-radius-sm)]',
        'border border-[var(--stroke-color-tertiary)]',
        '[border-width:var(--stroke-width-default)]',
      )}
    >
      <Icon size={24} />
      <span
        className={cn(
          'font-[family-name:var(--font-family-body)]',
          'text-[length:var(--font-size-web-body-xs)]',
          '[font-weight:var(--font-weight-body-regular)]',
          'text-[color:var(--color-font-secondary)]',
          'text-center',
        )}
      >
        {Icon.meta.name}
      </span>
    </div>
  );
}

function Catalog() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allIcons;
    return allIcons.filter((icon) => {
      if (icon.meta.name.toLowerCase().includes(q)) return true;
      return icon.meta.tags.some((t) => t.toLowerCase().includes(q));
    });
  }, [query]);

  const groups = groupByCategory(filtered);

  return (
    <div className="p-[var(--padding-2xl)] font-[family-name:var(--font-family-body)] text-[color:var(--color-font-primary)]">
      <header className="mb-[var(--padding-xl)] flex flex-col gap-[var(--gap-sm)]">
        <h1
          className={cn(
            'font-[family-name:var(--font-family-header)]',
            'text-[length:var(--font-size-web-header-h2)]',
            '[font-weight:var(--font-weight-header)]',
          )}
        >
          Icons
        </h1>
        <p
          className={cn(
            'text-[length:var(--font-size-web-body-sm)]',
            'text-[color:var(--color-font-secondary)]',
          )}
        >
          {allIcons.length} icons across {groupByCategory(allIcons).length} categories.
          Search by name or tag.
        </p>
        <input
          type="search"
          placeholder="Search icons…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={cn(
            'w-full max-w-[400px]',
            'px-[var(--padding-md)] py-[var(--padding-xs)]',
            'rounded-[var(--stroke-radius-sm)]',
            'border border-[var(--stroke-color-tertiary)]',
            '[border-width:var(--stroke-width-default)]',
            'font-[family-name:var(--font-family-body)]',
            'text-[length:var(--font-size-web-body-sm)]',
            'outline-none',
            'focus:border-[var(--stroke-color-default)]',
            'focus:[border-width:var(--stroke-width-focus)]',
          )}
        />
      </header>

      {groups.length === 0 ? (
        <p className="text-[color:var(--color-font-secondary)]">No icons match "{query}".</p>
      ) : (
        groups.map(([category, list]) => (
          <section key={category} className="mb-[var(--padding-2xl)]">
            <h2
              className={cn(
                'mb-[var(--padding-md)]',
                'font-[family-name:var(--font-family-header)]',
                'text-[length:var(--font-size-web-header-h3)]',
                '[font-weight:var(--font-weight-header)]',
              )}
            >
              {category}{' '}
              <span
                className={cn(
                  'text-[length:var(--font-size-web-body-sm)]',
                  '[font-weight:var(--font-weight-body-regular)]',
                  'text-[color:var(--color-font-secondary)]',
                )}
              >
                ({list.length})
              </span>
            </h2>
            <div
              className="grid gap-[var(--gap-sm)]"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}
            >
              {list
                .slice()
                .sort((a, b) => a.meta.name.localeCompare(b.meta.name))
                .map((Icon) => (
                  <IconTile key={Icon.meta.name} Icon={Icon} />
                ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

const meta: Meta<typeof Catalog> = {
  title: 'Icons/Catalog',
  component: Catalog,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Catalog>;

export const All: Story = {};
