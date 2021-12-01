import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

afterEach(() => {
  cleanup();
});
describe('render calculator component to the screen', () => {
  test('render calculator to the screen', () => {
    render(<Calculator />);
    const calculatorElement = screen.getByTestId('calculator');
    expect(calculatorElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
