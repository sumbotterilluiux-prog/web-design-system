import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    checked: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    label: 'label',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unselected: Story = {};

export const Selected: Story = {
  args: { checked: true },
};

export const Indeterminate: Story = {
  args: { indeterminate: true },
};

export const Disabled: Story = {
  args: { disabled: true },
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
    errorMessage: 'You must accept the terms to continue.',
  },
};

export const ControlledExample: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    function Demo() {
      const [checked, setChecked] = useState(false);
      return (
        <Checkbox
          label={`Currently: ${checked ? 'checked' : 'unchecked'}`}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      );
    }
    return <Demo />;
  },
};

export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--gap-md)">
      <Checkbox label="Unselected" />
      <Checkbox label="Selected" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled (unselected)" disabled />
      <Checkbox label="Disabled (selected)" disabled defaultChecked />
    </div>
  ),
};
