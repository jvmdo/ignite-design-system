import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jvmdo-ignite-ui/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Mussum Ipsum Cacildis',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'em',
  },
  argTypes: {
    as: {
      options: [
        'em',
        'p',
        'span',
        'strong',
        'u',
        's',
        'abbr',
        'cite',
        'code',
        'del',
        'dfn',
        'ins',
        'kbd',
        'mark',
        'q',
        'var',
      ],
      control: {
        type: 'select',
      },
    },
  },
}
