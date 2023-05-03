const formatAlbums = require('../format-albums.js');

describe('formatAlbums', () => {
  it('returns an array', () => {
    expect(formatAlbums()).toEqual([]);
  });
  it('returns a new array', () => {
    const inputArr = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    expect(formatAlbums(inputArr, artistIdReference)).not.toBe(inputArr);
  });
  it('changes the artist key to the artist id in the lookupObject', () => {
    const inputArr = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    expect(formatAlbums(inputArr, artistIdReference)).toEqual([
      { name: 'Grammatics', artistID: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artistID: 324, releaseYear: 2009 }
    ]);
  });
  it("doesn't mutate the original array, or the objects it contains", () => {
    const inputArr = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    const copyInputArr = [...inputArr];
    const copyObjOne = { ...inputArr[0] };

    formatAlbums(inputArr, artistIdReference);

    expect(inputArr).toEqual(copyInputArr);
    expect(copyObjOne).toEqual(copyInputArr[0]);
  });
});
