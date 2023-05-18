import React from 'react';
import ChartCanvas from '../../components/ex41/Graph.tsx';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import getDataPoints from '../../utils/ex41/func.js';


export default {
  component: ChartCanvas,
  title: 'ex41/Graph',
  argTypes: {
    lineColor: { control: 'color' },
    dotColor: { control: 'color' }
  },
}as ComponentMeta<typeof ChartCanvas>;

const {dataPoints }= getDataPoints()

const Template: ComponentStory<typeof ChartCanvas> = (args)=>
<ChartCanvas {...args} dataPoints={dataPoints.slice(0,100)}/>;

export const Default = Template.bind({});


Default.args = {
    label: 'Graph title',
    lineColor: '#36A2EB',
    dotColor:'#9BD0F5'
};


