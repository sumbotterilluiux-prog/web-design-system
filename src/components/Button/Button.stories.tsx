import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
  },
  args: {
    children: 'Button Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div className="flex flex-col gap-(--gap-md) p-(--padding-md)">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} className="flex items-center gap-(--gap-sm)">
          <Button {...args} variant="primary" size={size} />
          <Button {...args} variant="secondary" size={size} />
          <Button {...args} variant="tertiary" size={size} />
          <Button {...args} variant="primary" size={size} disabled>
            {args.children}
          </Button>
        </div>
      ))}
    </div>
  ),
};
