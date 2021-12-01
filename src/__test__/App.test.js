import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

afterEach(() => {
  cleanup();
});
describe('render App to the screen', () => {
  test('render App component to the screen', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
