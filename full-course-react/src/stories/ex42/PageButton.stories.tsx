import React from 'react';
import PageButton from '../../components/ex42/PageButton.tsx';
import { ComponentStory, ComponentMeta } from "@storybook/react";



export default {
  component: PageButton,
  title: 'ex42/PageButton',
}as ComponentMeta<typeof PageButton>;

const Template: ComponentStory<typeof PageButton> = (args)=><PageButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
   num:1,
   isDisabled:false,
   size:"medium"
};

export const Disabled = Template.bind({});
Disabled.args = {
    num:1,
    isDisabled:true,
 };

 export const Large = Template.bind({});
Large.args = {
    num:1,
    size:"large"
 };

