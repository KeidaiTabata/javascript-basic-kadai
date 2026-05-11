const today = new Date();

// const yeaer = today.getFullYear();

let [yeaer, month, date] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
]

console.log(yeaer + '年'+month + '月' + date + '日')