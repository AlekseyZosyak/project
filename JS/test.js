const mass = {
    name: 'Alex Zosyak',
    old: 33,
    camera: {
        name: 'Arri Alexa',
        format: ['fullHD', '4K', '5K'],
        lens: ['CP2', 'UltraPrime']
}
}
for (const keys in mass) {
    if(typeof(mass[keys]) === 'object') {
        for(const key in mass[keys]) {
            console.log(key)
        }
    }
    console.log(keys)
}


const {name, format, lens} = mass.camera;
console.log(name)


let info = Object.keys(mass).length;
console.log(info)


console.log(mass)



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(user) {
        const {languages} = user.skills;
        const age = user.age;
        let masseg = `Мне ${age} и я владею языками: `;
        languages.forEach(element => {
            masseg += `${element.toUpperCase()} `;
        });
        console.log(masseg)
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter)


function showExperience(plan) {

    const {exp} = plan.skills;
    console.log(exp)

}
showExperience(personalPlanPeter);



function showProgrammingLangs(plan) {

    let str = '';

    const {programmingLangs} = personalPlanPeter.skills;
    for (const key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }


    console.log(str)
}
showProgrammingLangs(personalPlanPeter);

const family = [];

function showFamily(arr) {
    let mass = `Семья состоит из : `;
    for (const element of arr) {

        mass += `${element}, `;

    }
    return mass;
}
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(element) {
        console.log(element.toLowerCase())
    })
}
console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';
console.log(someString.length)

function reverse(str) {
        // let mass = str.split('').reverse().join('');
        // console.log(mass)

    let mass1 = '';
    for (let i = str.length -1; i >= 0; i--) {
        mass1 += str[i];
    };
   
    return mass1;

}
console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';

    if (arr.length === 0) {
        console.log('error')
    }

    arr.forEach(function(element) {
        if(element !== missingCurr) {
            str += `${element}\n`;
        }
    });

    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));