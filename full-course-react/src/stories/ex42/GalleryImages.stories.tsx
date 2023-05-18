import React from 'react';
import GalleryImages from '../../components/ex42/GalleryImages.tsx';
import { createPage } from '../../utils/ex42/galleryData';
import { ComponentStory, ComponentMeta } from "@storybook/react";



export default {
  component: GalleryImages,
  title: 'ex42/GalleryImages',
}as ComponentMeta<typeof GalleryImages>;

const {images} = createPage();
console.log(images)

const Template: ComponentStory<typeof GalleryImages> = (args)=><GalleryImages {...args}/>;

export const Default = Template.bind({});

Default.args = {
  columns:3,
  itemData: images
};


