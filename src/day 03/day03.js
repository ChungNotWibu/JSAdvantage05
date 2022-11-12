// const arr = [1 , 2 , 3 , 4 , 5 , 7 , 8 , 9]
// const arrx2 = arr.map(
//     (item, index) => {
//         return item = item * 2
//     }
// )
const ArrDivisor2 = []
const bigArr = [10,11,12,13,14,15,16,17,18,19]
bigArr.map(
    (item,index) => {
        if (item %2 ==0){
            return ArrDivisor2.push(item)
        } else {
            return null
        }
    }
)
console.log(ArrDivisor2)

const singer = [
    {
        id : 1,
        name : "Mono",
        age : 22,
        gender : "Male"
    },

    {
        id : 2,
        name : "MTP",
        age : 28,
        gender : "Male"
    },
    {
        id : 3,
        name : "Chipu",
        age : 28,
        gender : "Male"
    },
    {
        id : 4,
        name : "J97",
        age : 25,
        gender : "Male"
    }
]

let maxage = 0
singer.map(
    (item,index) => {
        if(item.age >= maxage) {
            return maxage = item.age
        } else {
            return null
        }
    }
)

console.log("MaxAge",maxage)

let singerName = ''
let swapage = maxage
singer.map(
    (item,index ) => {
        if (item.age <= maxage){
            return (
                singer = item.age
            )
        } else {
            return null
        }
    }
)

console.log("swapAge",swapage)

// singer.map(
//     (item,index)=>{
//         if (item.age)
//     }
// )

