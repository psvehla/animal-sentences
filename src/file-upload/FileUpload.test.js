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

it('check the onChange event', () => {

    const onChange = jest.fn(),
        props = {
            value: 10,
            onChange
        },
        tree = mount(<FileUpload {...props} />).find('input');

    tree.simulate('change', { target: {value: 20} });
    expect(onChange).toHaveBeenCalledTimes(1);
});

it('check the onClick event', () => {

    const onClick = jest.fn(),
        props = {
            onClick
        },
        tree = mount(<FileUpload {...props} />).find('button');

    tree.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
});
