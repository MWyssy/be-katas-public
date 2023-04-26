const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('should return a string', () => {
    expect(counterIntelligence()).toBe('')
  })
  it('should return: "\'X\' - the string has been shifted by 1". When passsed a single letter Y', () => {
    expect(counterIntelligence('Y')).toBe('"X" - the string has been shifted by 1.')
  });
  it('should account for a multi letter string, shifted by 1', () => {
    expect(counterIntelligence('BCD Y')).toBe('"ABC X" - the string has been shifted by 1.')
  });
  it('should account for strings shifted by more than 1', () => {
    expect(counterIntelligence('MNO d')).toBe('"ABC X" - the string has been shifted by 12.')
  });
  it('should work if the letters have been shifted down', () => {
    expect(counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G')).toBe('"REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X" - the string has been shifted by -17.')
  });
});
