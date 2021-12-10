import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CountEx from './count-ex';

const renderComplexForm = () => {
  const { getByText, getByTestId } = render(<CountEx />);
  const increaseBtn = getByText('increase');
  const decreaseBtn = getByText('decrease');
  const count = getByTestId('count');
  return { increaseBtn, decreaseBtn, count };
};

describe('<CountEx />', () => {
  it('should render default component', () => {
    const { increaseBtn, decreaseBtn, count } = renderComplexForm();
    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(count.textContent).toBe('0');
  });

  it('should increase count', () => {
    const { increaseBtn, count } = renderComplexForm();
    fireEvent.click(increaseBtn);
    expect(count.textContent).toBe('1');
  });

  it('should decrease count', () => {
    const { decreaseBtn, count } = renderComplexForm();
    fireEvent.click(decreaseBtn);
    expect(count.textContent).toBe('-1');
  });

  it('should same count', () => {
    const { increaseBtn, decreaseBtn, count } = renderComplexForm();
    fireEvent.click(increaseBtn);
    fireEvent.click(decreaseBtn);
    expect(count.textContent).toBe('0');
  });
});
