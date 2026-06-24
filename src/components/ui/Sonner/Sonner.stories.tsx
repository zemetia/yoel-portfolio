import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { toast } from 'sonner';

import { Button } from '../Button';
import { Toaster } from './Sonner';

const meta = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast('Event saved successfully.')}>Default</Button>
      <Button variant="outline" onClick={() => toast.success('Changes saved.')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong.')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Disk space is low.')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info('A new version is available.')}>
        Info
      </Button>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Profile updated', {
          description: 'Your changes have been saved and will take effect immediately.',
        })
      }
    >
      Show with description
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('File deleted', {
          action: {
            label: 'Undo',
            onClick: fn(),
          },
        })
      }
    >
      Show with action
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      onClick={() => {
        const id = toast.loading('Uploading file…');
        setTimeout(() => toast.success('Upload complete!', { id }), 2000);
      }}
    >
      Show loading → success
    </Button>
  ),
};
