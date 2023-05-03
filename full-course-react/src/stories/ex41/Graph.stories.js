import React from 'react';
import ChartCanvas from '../../components/ex41/Graph';
import getDataPoints from '../../utils/ex41/func';



export default {
  component: ChartCanvas,
  title: 'ex41/Graph',
  argTypes: {
    lineColor: { control: 'color' },
    dotColor: { control: 'color' }
  },
};

const {dataPoints }= getDataPoints()

const Template = (args)=><ChartCanvas {...args} dataPoints={dataPoints.slice(0,100)}/>;

export const Default = Template.bind({});


Default.args = {
    label: 'Graph title',
    lineColor: '#36A2EB',
    dotColor:'#9BD0F5'
};


