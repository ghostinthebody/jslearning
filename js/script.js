"use strict";

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
    showMethod: function(plan) {        /*При его вызове метод будет принимать в себя объект и возвращать строку*/
    // const {age} = plan;                  <--
    // const {languages} = plan.skills;     <--
        let str = `Мне ${plan.age} и я владею языками: `;

        plan.skills.languages.forEach(function(i) {
            str += `${i.toUpperCase()} `;
        });
        return str;
    }
};


console.log(personalPlanPeter.showMethod(personalPlanPeter));


showProgrammingLangs(personalPlanPeter);        /*Функция которая принимает в себя объект со всеми данными и возвращать строку с опытом*/
function showExperience(plan) {
    const {exp} = plan.skills;

    return exp;
}

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {           /**/
    let DK = "";
    // const {programmingLangs} = plan.skills;  <--
    for (let key in plan.skills.programmingLangs) {
        DK += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    };
    return DK;
}
console.log(showProgrammingLangs(personalPlanPeter));




