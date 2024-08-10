const findTheOldest = function(people) {
    return people.reduce((oldest, person) => getAge(person) > getAge(oldest) ? person:oldest, people[0]);
};

function getAge(person){
    if(person.yearOfDeath == undefined){
        return 2024 - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
