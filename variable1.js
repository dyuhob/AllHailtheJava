let person1 = {
    name: "홍길동",
    age: 20,
    height: 167.7,
    marriage : false
}

console.log(person1.name);
person1.name = "hongkilldong";
console.log(person1["age"]);
person1["age"] = 22;
let field = "height";
console.log(person1[field]);
field = "marriage";
console.log(person1[field]);

let scoreArray = [90, 80, 85, 70, 88];
console.log(scoreArray[0]);
scoreArray[0] = 95;
console.log(scoreArray[2]);

let 자바스크립트반 = [100];
console.log(자바스크립트반[0]);

let stud1 = {
    studName: "이가영",
    studNo: '1-001',
    score: 90
}
let stud2 = {
    studName: "문민희",
    studNo: '1-002',
    score: 93
}
let stud3 = {
    studName: "박혜진",
    studNo: '1-003',
    score: 95
}
let stud4 = {
    studName: "이재현",
    studNo: '1-004',
    score: 88
}
let ourClass = [stud1, stud2, stud3];
console.log(ourClass[0].studName);
console.log(ourClass[1].score == stud2.score);
console.log(ourClass[2]["studNo"] == stud3.studNo);
ourClass[3] = stud4;

console.log(ourClass.length);
ourClass[4] = {
    studName: "김동견",
    studNo: '1-005',
    score: 89
}
console.log(ourClass.length);
let average = (ourClass[0].score + ourClass[1].score + ourClass[2].score + ourClass[3].score + ourClass[4].score)/ourClass.length;
console.log("우리반의 평균은" + average + "입니다.");

