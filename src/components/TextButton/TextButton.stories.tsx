import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from './TextButton';
import { Placeholder } from '../../icons';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: { type: 'inline-radio' },
      options: ['leading', 'trailing'],
    },
    disabled: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
  },
  args: {
    children: 'Button Label',
    size: 'md',
    disabled: false,
    iconPosition: 'leading',
  },
};
export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {};

export const LeadingIcon: Story = {
  args: { icon: <Placeholder />, iconPosition: 'leading' },
};

export const TrailingIcon: Story = {
  args: { icon: <Placeholder />, iconPosition: 'trailing' },
};

export const Disabled: Story = {
  args: { disabled: true, icon: <Placeholder /> },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div className="flex flex-col gap-(--gap-md) p-(--padding-md)">
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <div key={size} className="flex items-center gap-(--gap-lg)">
          <TextButton {...args} size={size} />
          <TextButton {...args} size={size} icon={<Placeholder />} iconPosition="leading" />
          <TextButton {...args} size={size} icon={<Placeholder />} iconPosition="trailing" />
          <TextButton {...args} size={size} disabled icon={<Placeholder />} />
        </div>
      ))}
    </div>
  ),
};
