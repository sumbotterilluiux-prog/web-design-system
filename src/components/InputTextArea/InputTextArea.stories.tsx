import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputTextArea } from './InputTextArea';

const meta: Meta<typeof InputTextArea> = {
  title: 'Components/Input Text Area',
  component: InputTextArea,
  argTypes: {
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
    label: 'Label',
    placeholder: 'Placeholder Text',
    optional: false,
    characterCount: false,
    disabled: false,
    error: false,
  },
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div className="w-[260px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof InputTextArea>;

export const Default: Story = {};

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

export const Everything: Story = {
  args: {
    optional: true,
    hintText: 'Hint text',
    characterCount: true,
    maxLength: 1000,
    defaultValue: 'Input Text',
  },
};

export const ControlledExample: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    function Demo() {
      const [value, setValue] = useState('');
      return (
        <InputTextArea
          label="Feedback"
          optional
          hintText="Tell us what you think."
          placeholder="Your message…"
          characterCount
          maxLength={500}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
      <InputTextArea label="Default (empty)" placeholder="Placeholder Text" />
      <InputTextArea label="Default (filled)" defaultValue="Input Text" />
      <InputTextArea
        label="Disabled (empty)"
        placeholder="Placeholder Text"
        disabled
      />
      <InputTextArea
        label="Disabled (filled)"
        defaultValue="Input Text"
        disabled
      />
      <InputTextArea
        label="Error (empty)"
        placeholder="Placeholder Text"
        error
        errorMessage="Placeholder message"
      />
      <InputTextArea
        label="Error (filled)"
        defaultValue="Input Text"
        error
        errorMessage="Placeholder message"
      />
    </div>
  ),
};
