let num = 50;

while (num <= 55) {
    console.log(num)
    num++
}



let num = 50;
do {
    console.log(num)
    num++
}

while (num <= 55)



for (let i = 1; i < 8; i++) {
    if(i ===6){
        //break;   // цикл після 6 преривається 
        continue; // пропуск шага який не треба - 6 
    }
    console.log(i)
}


for (let i =0; i<3; i++) {
    console.log(i)
    for (let j =0; j<3; j++) 
        console.log(j)
}

let result = '';
const lenqth = 7;

for(let i = 1; i < lenqth; i++) {

for (let j = 0; j < i; j++) {
    result += "*"

}

    result += '\n'; // перенос строчки 

}

console.log(result);


first: for (let i =0; i < 3; i++) {
    console.log('First level:' ${i})
}

