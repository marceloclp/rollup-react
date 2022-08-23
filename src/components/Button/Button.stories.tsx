import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './Button'

type Meta = ComponentMeta<typeof Button>
type Story = ComponentStory<typeof Button>

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
  }
} as Meta

export const Primary: Story = (args) => <Button {...args} />
