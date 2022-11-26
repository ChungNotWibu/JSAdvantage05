// cắt sửa xóa

// const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// const newFish = myFish.splice(2, 2, 'drum');
// console.log(myFish)

// 2 = vị trí bắt đầu - tại mandarin
// 0 = số lượng muốn xóa , vì bằng 0 nên ko xóa cái nào
// "drum" là giá trị muốn thêm vào


//  cách chạy :
// b1 : tìm value tại vị trí có index - index chta muốn truyền vào splice
//  b2 : hàm dò tham số thứ 2 truyền vào, nếu tham số truyền vào = 0 -> ko xóa item nào , nếu khác không xóa đi lượng
//  = lượng tham số ta truyền vào , vị trí bắt đầu từ trái qua phải , bắt đầu như trực Ox
// hàm splice tìm tham số thứ 3 ta truyền vào , tiến hành thêm vào index === index tại bước 1

// js là 1 ngôn ngữ bất đồng bộ
// jsb chx làm việc với promise : js chạy từ trên xuống dưới, từ trái qua phải

setTimeout(() => {
    
    console.log("dòng 1")}, 3000); 

setTimeout(() => {
    
    console.log("dòng 2")}, 5000); 

    console.log("dòng 3")



// thường dòng 1 hiện trc
// còn trường hợp hiện dòng 2 trước dòng 1:
// -> xử lí bất đồng bộ của js được áp dụng ,



// setTimeout() : là bất đồng bộ của js có nhiệm vụ thực thi  1 logic sau 1 khoảng thời gian xử dụng 
// setInterval() : là thực thi logic sau 1 khoảng thời gian nhưng hàm này có tính chất loop

//  arrow Function () - {}
//  cú pháp 2 hàm set trên giống như hàm map : là 1 hàm call back

// const numberArr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]


// bài toán thực tế:(Buổi 9): net-working : thay vì hard-code data -> lấy data back-end trả về và render ra màn hình
// trường hợp 1: internet với tốc độ nhanh -> độ trễ thấp 

// const FakeData = [
//     {
//         id : 1,
//         name : "Messi" ,
//     },
//     {
//         id : 2,
//         name : "Neymar" ,
//     },
//     {
//         id : 3,
//         name : "Salah" ,
//     },
//     {
//         id : 4,
//         name : "Harry Mắc Hài" ,
//     },
// ];

// setTimeout(() => {FakeData.map(
//     (item,index) => {
//          let divChild = document.createElement('div');
//          divChild.innerText =  item.name;
//          ListRenderQuery.appendChild(divChild);
        

//     }
// )
// } , 3000)


// const divTextQuery = document.querySelector(".div-test")


// setInterval(() => {
    
//     divTextQuery.classList.toggle("blue-test")   
// }, 1000);

// setInterval(() => {
    
//     divTextQuery.classList.toggle("green-test")   
// }, 2000);
// console.log(divTextQuery)

// prope j j đó:
// add() : thêm
// remove() : xóa
//  contanin() : ktra
// toggle() : nvu gần giống add, nghĩa là thay đổi ; ứng dụng giống như nút bấm của đèn học

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime))
// const arr = [1, 2, 3, 4, 5, 6]; 
// const oneAdded = arr.map(num => num + 1); console.log(arr);
// const myAwesomeArray = [1, 2, 3, 4, 5]

// myAwesomeArray.reduce((total, value) => total * value, 10)
// console.log(myAwesomeArray)
// const myAwesomeArray = [[1, 2], [3, [4, 6]], 5]
// const flat1 = myAwesomeArray.flat()
// const flat2 = flat1.flat()

// console.log(flat2)

// const myAwesomeArray = [
//     { id: 1, name: "Hải" },
//     { id: 2, name: "Doanh" },
//     { id: 3, name: "Việt" },
//     { id: 4, name: "Doanh" },
//   ]
  
//   const finalFilter = myAwesomeArray.filter(element => element.name === "Doanh")
//   console.log(finalFilter)
// const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// const removed = myFish.splice(-2, 1);
// console.log(myFish)
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6)
console.log(result)