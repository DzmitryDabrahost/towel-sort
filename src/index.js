
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return [];

  let newArr = matrix[0];

  for(let i = 1; i < matrix.length; i++){
    let c = matrix[i];

    if(i % 2 === 0) {

        for(let k = 0; k < c.length; k++) {
          newArr.push(c[k]);
        }

    } else {
    
    for(let j = c.length - 1; j >= 0; j--) {
        newArr.push(c[j]);
      }
    }
  }
  return newArr;
}
