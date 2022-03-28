const Calculator = require('../calculator.js');

describe('cal', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with ', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('adds', () => {
    cal.set(10);
    cal.add(2);
    expect(cal.value).toBe(12);
  });

  it('add should throw an error if value is gratter than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greather than 100');
  });

  it('substract', () => {
    cal.subtract(2);
    expect(cal.value).toBe(-2);
  });

  it('multiply', () => {
    cal.set(10);
    cal.multiply(2);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.set(0);
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('100 / 0 === Infinity', () => {
      cal.set(100);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('100 / 100 === 1', () => {
      cal.set(100);
      cal.divide(100);
      expect(cal.value).toBe(1);
    });
  });
});
