import { screen, render, cleanup } from '@testing-library/react';
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('render the navbar to the screen', () => {
  test('render navbar', () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId("nav");
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toContainHTML('<Link></Link>');
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});