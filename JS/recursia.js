'use ctrict';
const student = {
    js: [{name: 'Alex', progress: 100}, {name: 'Tola', progress: 100}],
    html: {
        basic: [{name: 'Vika', progress: 75}, {name: 'Kate', progress: 80}],
        pro: [{name: 'Valaran', progress: 90}, {name: 'Den', progress: 89}]
    }
};
function getTotal(mass) {
    let total = 0;
    let students = 0;

    for(let curse of Object.values(mass)) {
        if(Array.isArray(curse)) {
            students += curse.length;

            for(let i = 0; i < curse.length; i++) {
                total += curse[i].progress;
            }
        } else {
            for(let subCurse of Object.values(curse)) { 
                students += subCurse.length; 

                for(let i = 0; i < subCurse.length; i++) {
                    total += subCurse[i].progress;
                }
            }
        }
    }
    return total / students;
}
console.log(getTotal(student));

function getRecurs(mass) {
    if(Array.isArray(mass)) {
       let total = 0;

       for(let i = 0; i < mass.length; i++) {
            total += mass[i].progress;
       }
       return [total, mass.length];
    } else {
        let total = [0, 0];

        for (let subMass of Object.values(mass)) {
            const subMassArr = getRecurs(subMass);
            total[0] += subMassArr[0]; 
            total[1] += subMassArr[1]; 
        }
        return total;
    }
};
const result = getRecurs(student);
console.log(result[0] / result[1]);



function factorial(num) {
    if(typeof(num) !== 'number' || !Number.isInteger(num)) {
        return 'ERROR';
    }
    
    if (num >= 1) {
        return num * factorial(num - 1);
    } else {
        return 1;
    }
}

console.log(factorial(5));

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
    
//     return result;

// }
// pow(2, 2); // 4
// pow(2, 3); // 8
// pow(2, 4); // 16

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }