import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';


describe('Tests AddCategory Component', () => {
  const setCategories = jest.fn();
  let wrapper; 

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategoriesProp={ setCategories }/>)

  })

  it('should match the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  it('should change textbox', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';

    input.simulate('change', { target: { value } });
  });

  it('should not call setCategories when input does not match conditions', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();
  });

  it('should call setCategories and clear input', () => {
    const value = 'Hello World';

    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).toHaveBeenCalled();
    expect( wrapper.find('input').prop('value') ).toBe('');
  });
});