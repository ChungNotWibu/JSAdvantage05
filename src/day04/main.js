// cắt sửa xóa

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const newFish = myFish.splice(2, 2, 'drum');
console.log(myFish)

// 2 = vị trí bắt đầu - tại mandarin
// 0 = số lượng muốn xóa , vì bằng 0 nên ko xóa cái nào
// "drum" là giá trị muốn thêm vào


//  cách chạy :
// b1 : tìm value tại vị trí có index - index chta muốn truyền vào splice
//  b2 : hàm dò tham số thứ 2 truyền vào, nếu tham số truyền vào = 0 -> ko xóa item nào , nếu khác không xóa đi lượng
//  = lượng tham số ta truyền vào , vị trí bắt đầu từ trái qua phải , bắt đầu như trực Ox
// hàm splice tìm tham số thứ 3 ta truyền vào , tiến hành thêm vào index === index tại bước 1


