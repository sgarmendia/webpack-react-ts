import App from '../src/components/App';
import React from 'react';
// import { shallow } from 'enzyme';

describe('App', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').text()).toBe('Welcome to Light React Boilerplate')
    expect(wrapper).toMatchSnapshot
  })
})
