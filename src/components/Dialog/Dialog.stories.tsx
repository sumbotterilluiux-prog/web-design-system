import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog, DialogCriticalButton } from './Dialog';
import { Button } from '../Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    showCloseButton: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
  },
  args: {
    size: 'md',
    title: 'Dialog Headline',
    showCloseButton: true,
  },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

function Trigger({
  label,
  children,
}: {
  label: string;
  children: (close: () => void, open: boolean) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{label}</Button>
      {children(() => setOpen(false), open)}
    </>
  );
}

export const DefaultSmall: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Trigger label="Open small dialog">
      {(close, open) => (
        <Dialog
          {...args}
          open={open}
          onClose={close}
          secondaryAction={
            <Button variant="secondary" onClick={close}>
              Secondary Action
            </Button>
          }
          primaryAction={
            <Button variant="primary" onClick={close}>
              Primary Action
            </Button>
          }
        >
          Dialog message in sentence case.
        </Dialog>
      )}
    </Trigger>
  ),
};

export const DefaultMedium: Story = {
  args: { size: 'md' },
  render: (args) => (
    <Trigger label="Open medium dialog">
      {(close, open) => (
        <Dialog
          {...args}
          open={open}
          onClose={close}
          secondaryAction={
            <Button variant="secondary" onClick={close}>
              Secondary Action
            </Button>
          }
          primaryAction={
            <Button variant="primary" onClick={close}>
              Primary Action
            </Button>
          }
        >
          Dialog message in sentence case.
        </Dialog>
      )}
    </Trigger>
  ),
};

export const DefaultLarge: Story = {
  args: { size: 'lg' },
  render: (args) => (
    <Trigger label="Open large dialog">
      {(close, open) => (
        <Dialog
          {...args}
          open={open}
          onClose={close}
          secondaryAction={
            <Button variant="secondary" onClick={close}>
              Secondary Action
            </Button>
          }
          primaryAction={
            <Button variant="primary" onClick={close}>
              Primary Action
            </Button>
          }
        >
          Dialog message in sentence case.
        </Dialog>
      )}
    </Trigger>
  ),
};

export const ErrorSmall: Story = {
  args: { size: 'sm', title: 'Confirm deletion' },
  render: (args) => (
    <Trigger label="Open error dialog (sm)">
      {(close, open) => (
        <Dialog
          {...args}
          open={open}
          onClose={close}
          criticalAction={
            <DialogCriticalButton onClick={close}>
              Critical Action
            </DialogCriticalButton>
          }
          secondaryAction={
            <Button variant="secondary" onClick={close}>
              Secondary Action
            </Button>
          }
        >
          This action cannot be undone.
        </Dialog>
      )}
    </Trigger>
  ),
};

export const ErrorMedium: Story = {
  args: { size: 'md', title: 'Confirm deletion' },
  render: (args) => (
    <Trigger label="Open error dialog (md)">
      {(close, open) => (
        <Dialog
          {...args}
          open={open}
          onClose={close}
          criticalAction={
            <DialogCriticalButton onClick={close}>
              Critical Action
            </DialogCriticalButton>
          }
          secondaryAction={
            <Button variant="secondary" onClick={close}>
              Secondary Action
            </Button>
          }
        >
          This action cannot be undone.
        </Dialog>
      )}
    </Trigger>
  ),
};

export const ErrorLarge: Story = {
  args: { size: 'lg', title: 'Confirm deletion' },
  render: (args) => (
    <Trigger label="Open error dialog (lg)">
      {(close, open) => (
        <Dialog
          {...args}
          open={open}
          onClose={close}
          criticalAction={
            <DialogCriticalButton onClick={close}>
              Critical Action
            </DialogCriticalButton>
          }
          secondaryAction={
            <Button variant="secondary" onClick={close}>
              Secondary Action
            </Button>
          }
        >
          This action cannot be undone.
        </Dialog>
      )}
    </Trigger>
  ),
};

export const InfoOnly: Story = {
  args: { size: 'sm', title: 'About this app' },
  render: (args) => (
    <Trigger label="Open info dialog">
      {(close, open) => (
        <Dialog {...args} open={open} onClose={close}>
          A minimal dialog with no action buttons. Close via the icon or Esc.
        </Dialog>
      )}
    </Trigger>
  ),
};
