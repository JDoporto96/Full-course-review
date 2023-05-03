import React from 'react';
import Enzyme, {  render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ex41 from '../../src/pages/Ex41';

Enzyme.configure({ adapter: new Adapter() })

test("Render a graph component with a linear plot", () => {
  render(< Ex41 />);
  console.log(document.body.innerHTML);
});