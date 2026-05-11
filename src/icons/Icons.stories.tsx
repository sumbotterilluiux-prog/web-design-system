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
        'px-(--padding-md) py-(--padding-2xs)',
        'rounded-(--stroke-radius-full)',
        'border',
        'font-(family-name:--font-family-body)',
        'text-(length:--font-size-web-body-sm)',
        'font-(--font-weight-body-regular)',
        'cursor-pointer',
        active
          ? 'bg-(--color-neutral-solid-950) text-(--color-neutral-solid-50) border-(--color-neutral-solid-950)'
          : 'bg-(--color-neutral-solid-50) text-(--color-font-primary) border-(--stroke-color-tertiary)',
      )}
    >
      {label}
    </button>
  );
}

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
        'gap-(--gap-xs) p-(--padding-md)',
        'min-h-24',
        'rounded-(--stroke-radius-sm)',
        'border border-(--stroke-color-tertiary)',
      )}
    >
      <Icon size={24} />
      <span
        className={cn(
          'font-(family-name:--font-family-body)',
          'text-(length:--font-size-web-body-2xs)',
          'leading-tight',
          'font-(--font-weight-body-regular)',
          'text-(--color-font-secondary)',
          'text-center wrap-break-word w-full',
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
    <div className="p-(--padding-2xl) font-(family-name:--font-family-body) text-(--color-font-primary)">
      <header className="mb-(--padding-xl) flex flex-col gap-(--gap-sm)">
        <h1
          className={cn(
            'font-(family-name:--font-family-header)',
            'text-(length:--font-size-web-header-h2)',
            'font-(--font-weight-header)',
          )}
        >
          Icons
        </h1>
        <p
          className={cn(
            'text-(length:--font-size-web-body-sm)',
            'text-(--color-font-secondary)',
          )}
        >
          {allIcons.length} icons across {allCategories.length} categories.
          Search by name or tag, or filter by category.
        </p>
        <div className="flex flex-wrap gap-(--gap-2xs)">
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
            'w-full max-w-100',
            'px-(--padding-md) py-(--padding-xs)',
            'rounded-(--stroke-radius-sm)',
            'border border-(--stroke-color-tertiary)',
            'font-(family-name:--font-family-body)',
            'text-(length:--font-size-web-body-sm)',
            'outline-none',
            'focus:border-(--stroke-color-default)',
          )}
        />
      </header>

      {groups.length === 0 ? (
        <p className="text-(--color-font-secondary)">No icons match "{query}".</p>
      ) : (
        groups.map(([category, list]) => (
          <section key={category} className="mb-(--padding-2xl)">
            <h2
              className={cn(
                'mb-(--padding-md)',
                'font-(family-name:--font-family-header)',
                'text-(length:--font-size-web-header-h3)',
                'font-(--font-weight-header)',
              )}
            >
              {category}{' '}
              <span
                className={cn(
                  'text-(length:--font-size-web-body-sm)',
                  'font-(--font-weight-body-regular)',
                  'text-(--color-font-secondary)',
                )}
              >
                ({list.length})
              </span>
            </h2>
            <div
              className="grid gap-(--gap-sm)"
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
