export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCount = 0;

  while (wedgesCut < wedgesNeeded && limesCount < limes.length) {
    switch (limes[limesCount]) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }
    limesCount++;
  }

  return limesCount;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    const currentOrder = orders.shift();
    timeLeft -= timeToMixJuice(currentOrder);
  }
  return orders;
}
