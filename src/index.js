
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if(!matrix) return res
    for(let i=0; i<matrix.length; i++){
        for(j=0; j<matrix[i].length; j++)
        i%2===0? res.push(matrix[i][j]) : res.push(matrix[i][matrix[i].length - 1 - j])
    }
    return res
}
