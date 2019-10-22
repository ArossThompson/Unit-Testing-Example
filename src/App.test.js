import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Setup function returns a shallow wrapper of tested component
const setup = (props = {}, state = null ) => {
  const wrapper = shallow(<App {...props} />);
  if(state) {
    wrapper.setState(state);
  }

  return wrapper;
}

// Function for finding the testable element by it's ID attribute. 
const findByIDAttr = (wrapper, val) => {
  return wrapper.find(`#${val}`);
}

test('Should render without an error', () => {
  const wrapper = setup();
  const appComponent = findByIDAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);

});

test('Renders an increment button', () => {
  const wrapper = setup();
  const incrementButton = findByIDAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1);
});

test('Renders a decrement button', () => {
  const wrapper = setup(); 
  const decrementButton = findByIDAttr(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1);
});

test('Renders a display counter', () => {
  const wrapper = setup();
  const displayCounter = findByIDAttr(wrapper, 'display-counter')
  expect(displayCounter.length).toBe(1);
});

test('That the counter starts at 0', () => {
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState == 0);
});

test('Clicking the counter button increments the counter display by 1', () => {
  // Set default counter in the state of the App wrapper
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and simulate click
  const button = findByIDAttr(wrapper, 'increment-button');
  button.simulate('click')

  // find counter display
  const counterDisplay = findByIDAttr(wrapper, 'display-counter');
  expect(counterDisplay.text()).toContain(counter + 1)
  
});

test('Clicking the decrement button decreases the counter display by 1', () => {
  const counter = 7;
  const wrapper = setup(null, { counter } );

  const button = findByIDAttr(wrapper, 'decrement-button');
  button.simulate('click');

  const counterDisplay= findByIDAttr(wrapper, 'display-counter');
  expect(counterDisplay.text()).toContain(counter - 1);

})

