

let num1 = num2 = 10;

let result = num1 + num2;
console.log("결과값" + (num1 + num2));
console.log("결과값" + (num1 - num2));
console.log("10" - num1);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 % 4);

num1 = parseInt(Math.random() * 30);
console.log(num1);

num2 = parseInt(Math.random() * 50 + 1);
result = (num1 + num2);
if (result > 60){
    console.log("60보다 큰수입니다.");
}
// 누적연산
let sum = 0;
sum = sum + num1;//
sum = sum + num1;//
sum += num1;

sum = sum - num1;
sum -= num1;

sum *= num1 // sum = sum * num1;
sum /= num1 // sum = sum / num1;
sum %= num1 // sum = sum % num1;

sum = "";
sum += "Hello";
sum += "world";
console.log(sum);
document.write(sum);

let fruits = [{fname:"Apple", price: 1000},
            {fname:"Banana", price: 1500},
            {fname:"Cherry", price: 2000}
            ];
sum = "<ul>";
sum += "<li>" + fruits[0].fname + "</li>";
sum += "<li>" + fruits[1].fname + "</li>";
sum += "<li>" + fruits[2].fname + "</li>";
sum += "</ul>"
document.write(sum);

sum = "<table border=1><tbody>";

sum += "<tr><td>" + fruits[1].fname + "</td><td>" + fruits[1].price + "</td></tr>";
sum += "<tr><td>" + fruits[2].fname + "</td><td>" + fruits[2].price + "</td></tr>";
sum += "<tbody></table>";


if(fruits[0].price >= 1500){
    sum += "<tr><td>" + fruits[0].fname + "</td><td>" + fruits[0].price + "</td></tr>";
}
document.write(sum);