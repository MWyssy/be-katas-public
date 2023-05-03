const createRef = require('../create-ref.js');

describe('createRef', () => {
  it('returns an object', () => {
    expect(createRef()).toEqual({});
  });
  it('returns the name and phone number of a single person from the people array', () => {
    const people = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' }
    ];
    expect(createRef(people)).toEqual({ vel: '01134445566' });
  });
  it('returns the name and phone number of all people in the people array', () => {
    const people = [
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    expect(createRef(people)).toEqual({
      vel: '01134445566',
      ant: '01612223344',
      mitch: '07777777777'
    });
  });
  it('takes additional arguments to determine what the key-value pairs of the object will be', () => {
    const people = [
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    expect(createRef(people, 'name', 'address')).toEqual({
      vel: 'Northcoders, Leeds',
      ant: 'Northcoders, Manchester',
      mitch: null
    });
  });
  it('works with alternative arrays of objects', () => {
    const songs = [
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ];
    expect(createRef(songs, 'track', 'artist')).toEqual({
      '11:11': 'Dinosaur Pile-Up',
      'Powder Blue': 'Elbow'
    });
  });
});
