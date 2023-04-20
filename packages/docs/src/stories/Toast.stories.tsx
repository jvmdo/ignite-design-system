import { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@jvmdo-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Toast title',
    description: 'Toast description',
    dateTime: new Date(),
    duration: 5000,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    open: {
      control: 'boolean',
    },
    dateTime: {
      control: 'date',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: <Button as="div">Toast trigger</Button>,
  },
  decorators: [
    (Story, { args }) => {
      const [open, setOpen] = useState(false)
      return Story({
        args: {
          children: <Button as="div">Toast trigger</Button>,
          open,
          setOpen,
          ...args,
        },
      })
    },
  ],
}

export const Open: StoryObj<ToastProps> = {
  args: {
    open: true,
  },
}

export const Closed: StoryObj<ToastProps> = {
  args: {
    open: false,
  },
}
