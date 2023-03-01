function transformToObjects(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
  // should return an array of objects
}
console.log(transformToObjects([1, 2, 3]));
