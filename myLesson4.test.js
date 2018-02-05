import lesson4 from '../src/lesson4';

const { createSet, createMap } = lesson4.task;

describe('Objects lesson', () => {
  describe('set', () => {
    it(`Delete return value should be true if an element in the Set object has been removed successfully,
     otherwise false`, () => {
        const mySet = createSet(['a', 'b', 'c', NaN]);
        expect(mySet.delete('b')).toBe(true);
        expect(mySet.delete('d')).toBe(false);
        expect(mySet.delete(NaN)).toBe(true);
      });

    it('clear() method should remove all elements from a Set object', () => {
      const mySet = createSet(['a', 'b', 'c']);
      mySet.clear();
      expect(mySet.size).toEqual(0);
    });
  });

  describe('map', () => {
    it(`Delete return value should be true if an element in the Map object has been removed successfully,
     otherwise false`, () => {
        const myMap = createMap([['a', 1], ['b', 2], ['c', 3], [NaN, NaN]]);
        expect(myMap.delete('b')).toBe(true);
        expect(myMap.delete('b')).toBe(false);
        expect(myMap.delete(NaN)).toBe(true);
      });

    it('clear() method should remove all elements from a Map object', () => {
      const myMap = createMap([['a', 1], ['b', 2], ['c', 3]]);
      myMap.clear();
      expect(myMap.size).toEqual(0);
    });
  });
});
