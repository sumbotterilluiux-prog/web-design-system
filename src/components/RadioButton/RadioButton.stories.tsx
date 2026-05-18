import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Radio Button',
  component: RadioButton,
  argTypes: {
    label: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    completed: { control: { type: 'boolean' } },
  },
  args: {
    label: 'Option Text',
    checked: false,
    disabled: false,
    error: false,
    completed: false,
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Unselected: Story = {};

export const Selected: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledSelected: Story = {
  args: { disabled: true, checked: true },
};

export const Error: Story = {
  args: { error: true },
};

export const ErrorSelected: Story = {
  args: { error: true, checked: true },
};

export const Completed: Story = {
  args: { completed: true, checked: true },
};

export const WithDescription: Story = {
  args: {
    label: 'Email me about product updates',
    description: 'You can opt out at any time from your account settings.',
  },
};

export const WithError: Story = {
  args: {
    label: 'I agree to the terms',
    errorMessage: 'Please choose an option to continue.',
  },
};

export const ControlledExample: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    function Demo() {
      const [value, setValue] = useState<'a' | 'b' | 'c'>('a');
      return (
        <div
          className="flex flex-col gap-(--gap-2xs)"
          role="radiogroup"
          aria-label="Pick one"
        >
          {(['a', 'b', 'c'] as const).map((opt) => (
            <RadioButton
              key={opt}
              name="example-group"
              value={opt}
              label={`Option ${opt.toUpperCase()}`}
              checked={value === opt}
              onChange={() => setValue(opt)}
            />
          ))}
        </div>
      );
    }
    return <Demo />;
  },
};

export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-2 gap-x-(--gap-2xl) gap-y-(--gap-xs)">
      <RadioButton label="Default" />
      <RadioButton label="Selected" defaultChecked />
      <RadioButton label="Disabled" disabled />
      <RadioButton label="Disabled selected" disabled defaultChecked />
      <RadioButton label="Error" error />
      <RadioButton label="Error selected" error defaultChecked />
      <RadioButton label="Completed" completed defaultChecked />
    </div>
  ),
};
