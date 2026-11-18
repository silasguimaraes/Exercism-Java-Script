export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  const trimmedLine = line.trim();
  return trimmedLine[trimmedLine.length - 1];
}

export function backDoorPassword(word) {
  return `${frontDoorPassword(word)}, please`;
}
