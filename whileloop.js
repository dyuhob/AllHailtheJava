let i = 0;

//while(i < 10){
    console.log(i);
    i++
//}

let isOK = true;
while(isOK){
    let randomVal = parseInt(Math.random() * 10);
    console.log(randomVal)
    if(randomVal % 3 == 0){
        break; // 반복문을 종료.
    }
}

let sum = 0;
while(isOK){
    sum += parseInt(Math.random() * 10);
    console.log(sum);
    if (sum > 100){
        break;
    }
}

//while(true){
//    let msg = prompt("문자입력하세요: ");
//    console.log(msg);
//    if(msg =="stop"){
//        break;
//    }
//}
randomVal = parseInt(Math.random() * 100);
while(true){
    let input = prompt("숫자를 입력: ");
    if(input == "그만"){
        break;
    }
    else if(input == randomVal){
        console.log("정답입니다");
        break;
}      
    else if(input > randomVal){
        console.log("입력한 값이 더 큽니다");
    }
    else if(input < randomVal){
        console.log("입력한 값이 더 작습니다");
    }
}
console.log('end of while');