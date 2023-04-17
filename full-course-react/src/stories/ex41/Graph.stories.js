import React from 'react';
import ChartCanvas from '../components/ex41/Graph';



export default {
  component: ChartCanvas,
  title: 'ex41/Graph',
  argTypes: {
    lineColor: { control: 'color' },
    dotColor: { control: 'color' }
  },
};

const Template = (args, {loaded:{loadedData}})=><ChartCanvas {...args} dataPoints={loadedData}/>;

export const Default = Template.bind({});


Default.args = {
    label: 'Graph title',
    lineColor: '#36A2EB',
    dotColor:'#9BD0F5'
};

Default.loaders=[
  async()=>(
      {
        loadedData: (await(await fetch( 'http://localhost:4000/dataPoints')).json()).slice(0,100),
      }),
];

