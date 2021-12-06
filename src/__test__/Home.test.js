import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

afterEach(() => {
  cleanup();
});
describe('render home component to the screen', () => {
  test('render home component to the screen', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toContainHTML('<h1>Welcome to our page!</h1>');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
