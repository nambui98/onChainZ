import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import ButtonMain from './ButtonMain';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: 'Button',
  component: ButtonMain,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' },
    },

    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ButtonMain>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonMain> = (args) => <ButtonMain {...args} />;

export const Default = Template.bind({});
Default.args = { variant: undefined, children: 'Button' };
