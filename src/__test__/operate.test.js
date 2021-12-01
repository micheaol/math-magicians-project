import operate from '../logic/operate';

describe('test operate function', () => {
  test('add 2 and 3 to be 5', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('divide 4 by 2 to be 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('multiply 2 by 2 to be 4', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('minus 2 from 4 to be 2', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });
});
