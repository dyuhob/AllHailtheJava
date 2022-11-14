let score = (Math.random() * 60) + 40; // 60~100
let pass = "";
if (score >= 60){
    pass = "합격";
}
else {
    pass = "불합격";
}

pass = (score >= 60) ? "합격" : "불합격";


if(score >= 90){
    pass = "A";
}
else{
    if(score >= 80){
        pass = "B";
    }
    else{
        if(score >= 70){
            pass = "C";
        }
        else{
             pass = "D";
            }
        }
    }

score = Math.random() * 40 + 60;
if(score >= 90){
    if(score >= 95){
        pass = "A+";
    }
    else{
        pass = "A";
    }
}
else if(score >= 85){
    pass = "B+";
}
else if(score >= 80){
    pass = "B";
}
else if(score >= 75){
    pass = "C+";
}
else if(score >= 70){
    pass = "C";
}
else{
    pass= "D";
}

console.log(pass);

