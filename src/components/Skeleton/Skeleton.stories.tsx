import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const TextLines: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex w-[360px] flex-col gap-(--gap-xs)">
      <Skeleton className="w-3/4" />
      <Skeleton className="w-full" />
      <Skeleton className="w-1/2" />
    </div>
  ),
};

export const Circle: Story = {
  parameters: { controls: { disable: true } },
  render: () => <Skeleton className="size-12 rounded-full" />,
};

export const CardPlaceholder: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex w-[360px] items-center gap-(--gap-md)">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-(--gap-xs)">
        <Skeleton className="w-3/4" />
        <Skeleton className="w-1/2" />
      </div>
    </div>
  ),
};

export const Block: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Skeleton className="h-[160px] w-[320px] rounded-(--stroke-radius-md)" />
  ),
};
