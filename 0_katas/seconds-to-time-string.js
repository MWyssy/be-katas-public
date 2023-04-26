// Please do not change the name of this function
const secondsToTimeString = (secs) => {
  let result = ''
  if (!secs) return result
  
  const time = {
    year: 0,
    month: 0,
    week: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: secs
  }

  if (time.second === 1) return `1 second`

  if (time.second > 59) {
    while (time.second > 59) {
      if (time.second > 31536000) {
        time.year++
        time.second -= 31536000
      } else if (time.second > 2628000) {
        time.month++
        time.second -= 2628000
      } else if (time.second > 604800) {
        time.week++
        time.second -= 604800
      } else if (time.second > 86400) {
        time.day++
        time.second -= 86400
      } else if (time.second > 3600) {
        time.hour++
        time.second -= 3600
      } else {
        time.minute++
        time.second -= 60;
      };
    }
  }

  for (let timeframe in time) {
    if (timeframe === 'second' && result.length !== 0) {
      if (time[timeframe] === 1) {
        result += `, and ${time[timeframe]} ${timeframe}`
      }
      if (time[timeframe] > 1) {
        result += `, and ${time[timeframe]} ${timeframe}s`
      }
    } else {
      if (time[timeframe] === 1) {
        if (result.length > 0) result += `, ${time[timeframe]} ${timeframe}`
        else result += `${time[timeframe]} ${timeframe}`
      }
      if (time[timeframe] > 1) {
        if (result.length > 0) result += `, ${time[timeframe]} ${timeframe}s`
        else result += `${time[timeframe]} ${timeframe}s`
      }
    }
  }

  return result
};

module.exports = { secondsToTimeString };
