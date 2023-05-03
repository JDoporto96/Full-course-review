import React from 'react';
import GalleryImages from '../../components/ex42/GalleryImages';
import { createPage } from '../../utils/ex42/galleryData';


export default {
  component: GalleryImages,
  title: 'ex42/GalleryImages',
};

const {images} = createPage();
console.log(images)

const Template = (args)=><GalleryImages {...args}/>;

export const Default = Template.bind({});

Default.args = {
  columns:3,
  itemData: images
};


