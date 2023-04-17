import React from 'react';
import GalleryImages from '../../components/ex42/GalleryImages';


export default {
  component: GalleryImages,
  title: 'ex42/GalleryImages',
};

const itemData = [
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    width:50,
    height:100
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    width:50,
    height:50
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    width:100,
    height:50
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    width:50,
    height:150
  },
  {
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    src: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    src: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    src: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const Template = (args)=><GalleryImages {...args}/>;

export const Default = Template.bind({});

Default.args = {
  columns:3,
  itemData
};


