import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import FileUpload from './FileUpload';

it('renders correctly', () => {

  const tree = renderer
    .create(<FileUpload />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('check the onChange event', () => {

    const onChange = jest.fn(),
        props = {
            value: 10,
            onChange
        },
        component = mount(<FileUpload {...props} />).find('input');

    component.simulate('change', { target: {value: 20} });
    expect(onChange).toHaveBeenCalledTimes(1);
});

test('check the onClick event', () => {

    const onClick = jest.fn(),
        props = {
            onClick
        },
        component = mount(<FileUpload {...props} />).find('button');

    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
});
