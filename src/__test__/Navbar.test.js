import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

afterEach(() => {
  cleanup();
});
describe('render the navbar to the screen', () => {
  test('render navbar', () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId('nav');
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toContainHTML('<h1>Math Magician</h1>');
    expect(navbarElement).toContainHTML('<li><a href="/">Home</a>');
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
