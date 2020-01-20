import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NumericInput from 'react-numeric-input';
import App from './App';

it('renders correctly', () => {

  const tree = renderer
    .create(<App page="https://localhost:3000">AnimalSentences</App>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('test prefixLen input', () => {

  const TEST_VALUE = 10
  const changePrefixLenMock = jest.fn();

  const event = {
    preventDefault() {},
    target: { value: TEST_VALUE}
  };

  const component = shallow(<NumericInput onChange={changePrefixLenMock} />);
  component.find('input').simulate('change', event);
  expect(changePrefixLenMock).toHaveBeenCalledTimes(1);
});

test('test suffixLen input', () => {

  const TEST_VALUE = 10
  const changeSuffixLenMock = jest.fn();

  const event = {
    preventDefault() {},
    target: { value: TEST_VALUE}
  };

  const component = shallow(<NumericInput onChange={changeSuffixLenMock} />);
  component.find('input').simulate('change', event);
  expect(changeSuffixLenMock).toHaveBeenCalledTimes(1);
});

test('test numberOfSentences input', () => {

  const TEST_VALUE = 10
  const changeNumberOfSentencesMock = jest.fn();

  const event = {
    preventDefault() {},
    target: { value: TEST_VALUE}
  };

  const component = shallow(<NumericInput onChange={changeNumberOfSentencesMock} />);
  component.find('input').simulate('change', event);
  expect(changeNumberOfSentencesMock).toHaveBeenCalledTimes(1);
});
