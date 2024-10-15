const num1 = [1, 2, 3]
const num2 = []

// console.log(num1);

for(let item of num1){
    num2.push(item)
    // console.log(num2)
}
num1.push(12)

num2.push(66)

console.log(num1);
console.log(num2)