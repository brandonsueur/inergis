import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Search, Download, Settings, Heart } from 'lucide-react';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'premium'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    fullRounded: {
      control: 'boolean',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    children: 'Button Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button Ghost',
    variant: 'ghost',
  },
};

export const Premium: Story = {
  args: {
    children: 'Button Premium',
    variant: 'premium',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large Button',
    size: 'xl',
  },
};

// With icons
export const WithIconLeft: Story = {
  args: {
    children: 'Search',
    icon: Search,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Download',
    icon: Download,
    iconPosition: 'right',
  },
};

export const IconOnly: Story = {
  args: {
    icon: Settings,
    variant: 'outline',
  },
};

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

// Colors (only work with primary variant)
export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'primary',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    variant: 'primary',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Button',
    variant: 'primary',
    color: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Button',
    variant: 'primary',
    color: 'info',
  },
};

// Layout variants
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const FullRounded: Story = {
  args: {
    children: 'Full Rounded',
    fullRounded: true,
  },
};

export const FullRoundedIconOnly: Story = {
  args: {
    icon: Heart,
    fullRounded: true,
    variant: 'primary',
  },
};

// Complex examples
export const ComplexExample: Story = {
  args: {
    children: 'Complex Button',
    variant: 'premium',
    size: 'lg',
    icon: Settings,
    iconPosition: 'left',
    fullRounded: true,
  },
};

// Group example showing multiple buttons
export const ButtonGroup: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="premium">Premium</Button>
    </div>
  ),
};

export const SizeComparison: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};
