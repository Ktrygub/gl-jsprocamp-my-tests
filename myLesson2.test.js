import lesson2 from '../src/lesson2';

const {
  sum, sumAll, pow, random,
} = lesson2.task;

describe('sum function', () => {
  test('sum works good', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0.1, 0.2)).toBe(0.3);
    expect(() => sum('1', 2)).toThrow();
    expect(() => sum()).toThrow();
  });
});

describe('sumAll function', () => {
  test('sumAll works good', () => {
    expect(sumAll(1, 2, 3)).toBe(6);
    expect(sumAll(0.1, 0.2, 0.3)).toBe(0.6);
    expect(sumAll()).toBe(0);
    expect(() => sumAll(1, {})).toThrow();
  });
});

describe('pow function', () => {
  test('pow works good', () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(4, 1 / 2)).toBe(2);
    expect(pow(2, -2)).toBe(0.25);
    expect(() => pow(2, '2')).toThrow();
  });
});

describe('random function', () => {
  test('random works good', () => {
    const results = {
      min: random(2.7, -0.8),
      max: random(2.7, -0.8),
    };
    for (let i = 0; i < 1000; i += 1) {
      results.min = Math.min(random(2.7, -0.8), results.min);
      results.max = Math.max(random(2.7, -0.8), results.max);
    }
    expect(results.min).toBe(0);
    expect(results.max).toBe(2);

    expect(() => random(NaN, 4)).toThrow();
    expect(() => random(0, Infinity)).toThrow();
    expect(() => random(-Number.MAX_VALUE / 2, Number.MAX_VALUE / 1.9)).toThrow();
  });
});
