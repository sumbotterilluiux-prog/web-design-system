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

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-[var(--padding-md)] py-[var(--padding-2xs)]',
        'rounded-[var(--stroke-radius-full)]',
        'border [border-width:var(--stroke-width-default)]',
        'font-[family-name:var(--font-family-body)]',
        'text-[length:var(--font-size-web-body-sm)]',
        '[font-weight:var(--font-weight-body-regular)]',
        'cursor-pointer',
        active
          ? 'bg-[var(--color-neutral-solid-950)] text-[var(--color-neutral-solid-50)] border-[var(--color-neutral-solid-950)]'
          : 'bg-[var(--color-neutral-solid-50)] text-[var(--color-font-primary)] border-[var(--stroke-color-tertiary)]',
      )}
    >
      {label}
    </button>
  );
}

/**
 * Split a PascalCase identifier into space-separated words for readable display
 * (e.g. "ChevronContractHorizontal" → "Chevron Contract Horizontal"). The
 * actual exported component name stays PascalCase — this is purely for the
 * catalog label so long names wrap naturally and stay inside their tile.
 */
function displayName(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
}

function IconTile({ Icon }: { Icon: IconComponent }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'gap-[var(--gap-xs)] p-[var(--padding-md)]',
        'min-h-[96px]',
        'rounded-[var(--stroke-radius-sm)]',
        'border border-[var(--stroke-color-tertiary)]',
        '[border-width:var(--stroke-width-default)]',
      )}
    >
      <Icon size={24} />
      <span
        className={cn(
          'font-[family-name:var(--font-family-body)]',
          'text-[length:var(--font-size-web-body-2xs)]',
          'leading-tight',
          '[font-weight:var(--font-weight-body-regular)]',
          'text-[color:var(--color-font-secondary)]',
          'text-center break-words w-full',
        )}
      >
        {displayName(Icon.meta.name)}
      </span>
    </div>
  );
}

type CategoryFilter = 'all' | IconCategory;

function Catalog() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const allCategories = useMemo(() => groupByCategory(allIcons), []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return allIcons.filter((icon) => {
      if (activeCategory !== 'all' && icon.meta.category !== activeCategory) return false;
      if (!q) return true;
      if (icon.meta.name.toLowerCase().includes(q)) return true;
      return icon.meta.tags.some((t) => t.toLowerCase().includes(q));
    });
  }, [query, activeCategory]);

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
          {allIcons.length} icons across {allCategories.length} categories.
          Search by name or tag, or filter by category.
        </p>
        <div className="flex flex-wrap gap-[var(--gap-2xs)]">
          <CategoryChip
            label={`all (${allIcons.length})`}
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          />
          {allCategories.map(([cat, list]) => (
            <CategoryChip
              key={cat}
              label={`${cat} (${list.length})`}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
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
