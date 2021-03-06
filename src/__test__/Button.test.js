import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

afterEach(() => {
  cleanup();
});

const handleClick = () => {

};
describe('render button component to the screen', () => {
  test('should render button component', () => {
    render(<Button onClick={handleClick} />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
