import React from 'react';
import GalleryIndex from '../../components/ex42/GalleryIndex';


export default {
  component: GalleryIndex,
  title: 'ex42/GalleryIndex',
};

const Template = (args)=><GalleryIndex {...args}/>;

export const Default = Template.bind({});


Default.args = {
   pages:6,
   currentPage:6
};

