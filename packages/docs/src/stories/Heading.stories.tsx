import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@jvmdo-ignite-ui/react'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: 'select',
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: 'select',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading',
    as: 'h2',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading can assume any of the 6 valid heading levels. Keep in mind that the sizes are not tied to one specific level',
      },
    },
  },
}
