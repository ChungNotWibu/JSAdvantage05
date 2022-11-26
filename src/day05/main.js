// tìm hiểu về localStorage và seesionStorage


// khái niệm: localStorage là bộ nhớ cục bộ của trình duyệt 
//  được lưu trữ dưới dạng key value
//  dữ liệu sau khi lưu vào local storage sẽ ko bị mất di khi người dùng thực hiện các thao tác:
//1 tắt tab đang mở của trình duyệt 
// 2 tát trình duyệt
//  3 tắt nguồn laptop
//  dữ liệu đc lưu trong LS chỉ bị maasts đi khi người dùng thực hiện các thao tác:
// c 1 gỡ bọ trình duyệt , c 2 xóa bỏ bộ nhớ đệm tạm thời

//  Cú pháp:
//  localStorage.method()

//  * các method chính :
//   1 lưu trưx dữ liệu vào bộ nhớ đệm của LS : setItem(key,value)

//  example:
const nameMember = "Quyết"
const testkey = "Quyetkey"
localStorage.setItem('Quyetkey',nameMember)

const valueY = "JSB06"
const valueZ = "JSA05"
const keyZ = "NH"
localStorage.setItem('NH',valueZ)
 
// Khi ddeer cungf 1 key vaf gọi 2 value khác nhau thfi nó sẽ đè lên nhau và cái dưới sẽ hiện ra
// cuối cùng vì js chạy từ trên xuống dưới
//  có thể để timeout cho hiện ra

//  2 lấy dữ liệu ra từ trong LS : getItem(key)


const getfromlocalStorage = localStorage.getItem(testkey) 
//  const getfromlocalStorage = localStorage.getItem("Quyetkey") 

console.log(getfromlocalStorage)

// 3 là xóa : removeItem(key)

// 4 là xóa tất cả : clear()









// seessionStorage : lưu dữ liệu của trình duyệt
//  cũng lưu dưới dạng keyvalue
// có các method giống LS

// điểm khác : dữ liệu lưu vào sẽ bị xóa khi tắt tab , tắt trình duyệt , cache, cookie và tắt nguồn


// lưu ý :
//  tùy từng trình duyệt mà : 
// 