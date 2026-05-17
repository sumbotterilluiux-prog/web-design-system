import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['elevated', 'outlined'],
    },
    elevation: {
      control: { type: 'inline-radio' },
      options: ['1'],
    },
    padding: {
      control: { type: 'inline-radio' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    radius: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  args: {
    variant: 'elevated',
    elevation: '1',
    padding: 'md',
    radius: 'lg',
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[320px]">
      <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-md)">
        Default card &mdash; elevated, md padding, lg radius.
      </p>
    </Card>
  ),
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
  render: (args) => (
    <Card {...args} className="w-[320px]">
      <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-md)">
        Outlined &mdash; use when nested inside another card.
      </p>
    </Card>
  ),
};

export const NestedCard: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Card variant="elevated" padding="lg" className="w-[400px]">
      <p className="mb-(--gap-md) font-(family-name:--font-family-body) text-(length:--font-size-web-body-md)">
        Outer card &mdash; elevated.
      </p>
      <Card variant="outlined" padding="md">
        <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-sm)">
          Inner card &mdash; outlined (1px tertiary stroke instead of a
          second floating shadow).
        </p>
      </Card>
    </Card>
  ),
};

export const PaddingScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--gap-md)">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((p) => (
        <Card key={p} padding={p} className="w-[280px]">
          <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-sm)">
            padding=&quot;{p}&quot;
          </p>
        </Card>
      ))}
    </div>
  ),
};

export const RadiusScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-(--gap-md)">
      {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map((r) => (
        <Card key={r} radius={r} className="w-[200px]">
          <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-sm)">
            radius=&quot;{r}&quot;
          </p>
        </Card>
      ))}
    </div>
  ),
};
