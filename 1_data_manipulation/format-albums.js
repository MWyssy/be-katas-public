const formatAlbums = (arr, lookupObj) => {
  if (!arr || arr.length === 0) return [];
  const result = [...arr];

  return result.map((item) => {
    const copyItem = { ...item };
    copyItem.artistID = lookupObj[copyItem.artist];
    delete copyItem.artist;

    return {
      name: copyItem.name,
      artistID: copyItem.artistID,
      releaseYear: copyItem.releaseYear
    };
  });
};

module.exports = formatAlbums;
