import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@jvmdo-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder:
      'Type your answer here. Feel free to use how many words you need. Be sensible.',
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Explain what is `decorators` used for: </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: '',
    disabled: true,
  },
}
