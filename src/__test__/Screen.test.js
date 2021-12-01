import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Screen from '../components/Screen';

afterEach(() => {
  cleanup();
});
describe('render screen to the Dom', () => {
  test('render screen component to the screen', () => {
    render(<Screen />);
    const screenElement = screen.getByTestId('screen');
    expect(screenElement).toBeInTheDocument();
    expect(screenElement).toContainHTML('<h1></h1>');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Screen />);
    expect(tree).toMatchSnapshot();
  });
});
