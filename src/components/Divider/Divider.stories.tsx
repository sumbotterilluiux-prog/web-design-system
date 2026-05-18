import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <div className="w-[360px]">
      <Divider {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-[120px] items-stretch">
      <Divider {...args} />
    </div>
  ),
};

export const BetweenSections: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="w-[420px] flex flex-col gap-(--gap-md)">
      <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-md)">
        First section &mdash; an introductory paragraph that establishes context
        for the content below.
      </p>
      <Divider />
      <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-md)">
        Second section &mdash; a related but distinct block that benefits from
        the visual break above.
      </p>
      <Divider />
      <p className="font-(family-name:--font-family-body) text-(length:--font-size-web-body-md)">
        Third section &mdash; closing remarks.
      </p>
    </div>
  ),
};

export const BetweenFlexItems: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex h-[24px] items-stretch gap-(--gap-md) font-(family-name:--font-family-body) text-(length:--font-size-web-body-sm)">
      <span>Home</span>
      <Divider orientation="vertical" />
      <span>Products</span>
      <Divider orientation="vertical" />
      <span>About</span>
      <Divider orientation="vertical" />
      <span>Contact</span>
    </div>
  ),
};
