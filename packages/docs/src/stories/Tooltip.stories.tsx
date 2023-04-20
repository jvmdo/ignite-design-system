import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@jvmdo-ignite-ui/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Box css={{ width: '20rem' }}>
        <Text size="4xl">Hover over me!</Text>
      </Box>
    ),
    content: 'Tooltip content',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'grid', placeItems: 'center', height: '20rem' }}>
          {Story()}
        </div>
      )
    },
  ],
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: 'inline-radio',
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Top: StoryObj<TooltipProps> = {
  args: {
    side: 'top',
  },
}

export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
  },
}

export const Right: StoryObj<TooltipProps> = {
  args: {
    side: 'right',
  },
}

export const Left: StoryObj<TooltipProps> = {
  args: {
    side: 'left',
  },
}
