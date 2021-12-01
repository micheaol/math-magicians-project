import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

afterEach(() => {
  cleanup();
});
describe('render quote to screen', () => {
  test('render quote component to screen', () => {
    render(<Quote />);
    const quoteElement = screen.getByTestId('quote-wrapper');
    expect(quoteElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
