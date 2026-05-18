import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText } from './InputText';
import { Placeholder } from '../../icons';

const meta: Meta<typeof InputText> = {
  title: 'Components/Input Text',
  component: InputText,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
    label: { control: { type: 'text' } },
    hintText: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    optional: { control: { type: 'boolean' } },
    characterCount: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
  },
  args: {
    size: 'medium',
    label: 'Label',
    placeholder: 'Placeholder Text',
    optional: false,
    characterCount: false,
    disabled: false,
    error: false,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="w-[260px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'small' },
};

export const Medium: Story = {
  args: { size: 'medium' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const Filled: Story = {
  args: { defaultValue: 'Input Text' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledFilled: Story = {
  args: { disabled: true, defaultValue: 'Input Text' },
};

export const Error: Story = {
  args: { error: true, errorMessage: 'Placeholder message' },
};

export const ErrorFilled: Story = {
  args: {
    error: true,
    errorMessage: 'Placeholder message',
    defaultValue: 'Input Text',
  },
};

export const WithOptional: Story = {
  args: { optional: true },
};

export const WithHintText: Story = {
  args: { hintText: 'Hint text' },
};

export const WithCharacterCount: Story = {
  args: { characterCount: true, maxLength: 1000 },
};

export const WithLeadingIcon: Story = {
  args: { leadingIcon: <Placeholder size={20} /> },
};

export const WithTrailingIcon: Story = {
  args: { trailingIcon: <Placeholder size={20} /> },
};

export const Everything: Story = {
  args: {
    optional: true,
    hintText: 'Hint text',
    characterCount: true,
    maxLength: 1000,
    leadingIcon: <Placeholder size={20} />,
    trailingIcon: <Placeholder size={20} />,
    defaultValue: 'Input Text',
  },
};

export const ControlledExample: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    function Demo() {
      const [value, setValue] = useState('');
      return (
        <InputText
          label="Email"
          optional
          hintText="We'll never share it."
          placeholder="you@example.com"
          characterCount
          maxLength={120}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    }
    return <Demo />;
  },
};

export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--gap-md)">
      {(['small', 'medium', 'large'] as const).map((size) => (
        <InputText
          key={size}
          size={size}
          label={`Label (${size})`}
          placeholder="Placeholder Text"
          leadingIcon={
            <Placeholder size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} />
          }
          trailingIcon={
            <Placeholder size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} />
          }
        />
      ))}
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--gap-md)">
      <InputText label="Default (empty)" placeholder="Placeholder Text" />
      <InputText label="Default (filled)" defaultValue="Input Text" />
      <InputText label="Disabled (empty)" placeholder="Placeholder Text" disabled />
      <InputText label="Disabled (filled)" defaultValue="Input Text" disabled />
      <InputText
        label="Error (empty)"
        placeholder="Placeholder Text"
        error
        errorMessage="Placeholder message"
      />
      <InputText
        label="Error (filled)"
        defaultValue="Input Text"
        error
        errorMessage="Placeholder message"
      />
    </div>
  ),
};
