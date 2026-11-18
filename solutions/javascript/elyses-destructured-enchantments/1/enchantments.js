export function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}

export function getSecondCard(deck) {
  const [, secondCard] = deck;
  return secondCard;
}

export function swapTwoCards(deck) {
  const [first, second] = deck;
  return [second, first];
}

export function shiftThreeCardsAround(deck) {
  const [first, second, third] = deck;
  return [second, third, first];
}

export function pickNamedPile(piles) {
  const { chosen } = piles;
  return chosen;
}

export function swapNamedPile(piles) {
  const { chosen: disregarded, disregarded: chosen } = piles;
  return { chosen, disregarded };
}
