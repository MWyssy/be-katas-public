// Please do not change the name of this function
const supermarketQueue = (customers, checkouts) => {
  let queueTime = 0;
  if (!customers || customers.length === 0) return queueTime;
  const copyCustomers = [...customers];

  if (checkouts === 1)
    return customers.reduce((sum, customer) => sum + customer, 0);

  if (checkouts < copyCustomers.length) {
    const checkoutsInUse = copyCustomers.splice(0, checkouts);
    let lowestValue = 999999;
    let longestQueuetime = 0;
    checkoutsInUse.forEach((customer) => {
      if (customer < lowestValue) lowestValue = customer;
    });
    longestQueuetime += lowestValue + copyCustomers[0];

    if (copyCustomers.length <= 1) {
      queueTime += longestQueuetime;
    } else {
      queueTime +=
        supermarketQueue(copyCustomers.slice(1), checkouts) + longestQueuetime;
    }
  } else {
    let highestValue = 0;
    copyCustomers.forEach((customer) => {
      if (customer > highestValue) highestValue = customer;
    });
    queueTime = highestValue;
  }

  return queueTime;
};

module.exports = { supermarketQueue };
