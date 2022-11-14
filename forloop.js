//for(let i = 1; i<=10; i++){
//    if(i % 2 == 0){
//        console.log(i);
//    }
//}

let sum = 0;
for (let i = 1; i <= 10; i++){
    if(i % 2 ==0){
    sum += i;
    console.log(sum)
}
}
document.write('<table border=1>');
for (let k = 4; k <= 9; k++){
    let dan = k; 
    for (let num = 1; num <= 9; num++){
    document.write("<tr>" + "<td>" + dan + "</td>" + "<td>" + "*" + "</td>" + "<td>" + num + "</td>" + "<td>" + "=" + "</td>" + "<td>" + (dan*num) + "</td>"+ "</tr>" );
        }}
document.write('</table>');

let fruits = [{fname:"apple", price: 1000},
              {fname:"banana", price: 1500},   
              {fname:"cherry", price: 2000},
              {fname:"melon", price: 1700},
              {fname:"tomato", price: 1200},
              {fname:"mango", price: 1500},
              {fname:"blueberry", price: 1500}]



document.write('<table border=1>');
document.write('<thead><tr><th>과일</th><th>가격</th></tr></thead>');

document.write('<tbdoy>')
for(i = 0; i < 8; i++){
    document.write("<tr>" + "<th>" + fruits[i].fname + "</th>" + "<th>" + fruits[i].price + "</th>" + "</tr>");
}
document.write('</tbdoy>')
document.write('</table>');

for(let fruit of fruits){
    console.log('과일: ' + fruit.fname + ", 가격: " + fruit.price);
}
