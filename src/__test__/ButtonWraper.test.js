import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ButtonWraper from '../components/ButtonWraper';

afterEach(() => {
  cleanup();
});

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

describe('render component to screen', () => {
  test('render ButtonWraper to the screen', () => {
    render(<ButtonWraper>{btnValues}</ButtonWraper>);
    const buttonWrapperElement = screen.getByTestId('button-wraper');
    expect(buttonWrapperElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<ButtonWraper>{btnValues}</ButtonWraper>);
    expect(tree).toMatchSnapshot();
  });
});
