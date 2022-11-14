let person1 = {
    name: "홍길동",
    point: (Math.random() * 10).toFixed(1)
}
let person2 = {
    name: "김길동",
    point: (Math.random() * 10).toFixed(1)
}


if(person1.point > person2.point){
    console.log(person1.name);
}
else{
    console.log(person2.name);
}

let person3 = {
    name: "박길동",
    point: (Math.random() * 10).toFixed(1)
}

if(person1.point > person2.point){
    if(person1.point > person3.point){
    console.log(person1.name);
    }
    else{
        console.log(person3.name);
    }
}
else{
    if(person2.point > person3.point){
        console.log(person2.name);
    }
    else{
        console.log(person3.name);
    }
}
//