import lesson6 from '../src/lesson6';

const { getClimate, getProfile, getPilots } = lesson6.task;

describe('getClimate', () => {
  it('Should return climate', async () => {
    const data = await getClimate('Mustafar');
    expect(data).toBe('hot');
  });
});

describe('getProfile', () => {
  it('should return object with info on character', async () => {
    const obj = {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/8/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/',
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'https://swapi.co/api/people/3/',
    };
    const data = await getProfile('R2-D2');
    expect(data).toEqual(obj);
  });
});

describe('getPilots', () => {
  const arr = ['Luke Skywalker', 'Biggs Darklighter', 'Wedge Antilles', 'Jek Tono Porkins'];
  it('should return array with pilots names of the star ship', async () => {
    const data = await getPilots('X-wing');
    expect(data).toEqual(arr);
  });
});
