const LinkedList = require('./linkedList');
const R = require('ramda');

describe('Run the value for different number of prisoners', () => {
  test('Run for 41 prisoners, value should be 19', () => {
    const l1 = new LinkedList();
    R.map(el => l1.append(el))(R.range(1,42))
    expect(l1.kill1()).toBe(19)
  });
  test('Run for 77 prisoners, value should be 27', () => {
    const l1 = new LinkedList();
    R.map(el => l1.append(el))(R.range(1,78))
    expect(l1.kill1()).toBe(27)
  })
})