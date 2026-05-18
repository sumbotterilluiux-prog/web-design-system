import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import { Placeholder } from '../../icons';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary', 'inherit'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['tiny', 'sm', 'md', 'lg'],
    },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    'aria-label': 'Placeholder action',
    variant: 'primary',
    size: 'md',
    disabled: false,
    icon: <Placeholder />,
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Inherit: Story = {
  args: { variant: 'inherit' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div className="flex flex-col gap-(--gap-md) p-(--padding-md)">
      {(['lg', 'md', 'sm', 'tiny'] as const).map((size) => (
        <div key={size} className="flex items-center gap-(--gap-sm)">
          <IconButton {...args} variant="primary" size={size} />
          <IconButton {...args} variant="secondary" size={size} />
          <IconButton {...args} variant="tertiary" size={size} />
          <IconButton {...args} variant="inherit" size={size} />
          <IconButton {...args} variant="primary" size={size} disabled />
        </div>
      ))}
    </div>
  ),
};
