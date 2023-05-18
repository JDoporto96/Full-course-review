import React from 'react';
import GalleryIndex from '../../components/ex42/GalleryIndex.tsx';
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {
  component: GalleryIndex,
  title: 'ex42/GalleryIndex',
}as ComponentMeta<typeof GalleryIndex>;

const Template: ComponentStory<typeof GalleryIndex> = (args)=><GalleryIndex {...args}/>;

export const Default = Template.bind({});


Default.args = {
   pages:6,
   currentPage:6
};

