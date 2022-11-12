// const arr = [1 , 2 , 3 , 4 , 5 , 7 , 8 , 9]
// const arrx2 = arr.map(
//     (item, index) => {
//         return item = item * 2
//     }
// )

const bigArr = [10,11,12,13,14,15,16,17,18,19]
const ArrDivisor2 = bigArr.map(
    (item,index) => {
        return item = item%2 == 0
    }
)
console.log(ArrDivisor2)