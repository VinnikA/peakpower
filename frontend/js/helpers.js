export function mixArr(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export function getFourElements(array, startIndex) {
  const result = [];
  const arrayLength = array.length;

  for (let i = 0; i < 4; i++) {
      const index = (startIndex + i) % arrayLength;
      result.push(array[index]);
  }
  
  return result;
}

export function getTwoElements(array, startIndex) {
  const result = [];
  const arrayLength = array.length;

  for (let i = 0; i < 2; i++) {
      const index = (startIndex + i) % arrayLength;
      result.push(array[index]);
  }
  
  return result;
}