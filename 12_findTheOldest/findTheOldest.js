const findTheOldest = function(array) {
    let yearsAlive = array.map(person => ({
        ...person,
        age: (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth
    }));
    return yearsAlive.sort((a, b) => {
        if (a.age > b.age) {
            return -1
        } else if (a.age < b.age) {
            return 1
        }
    }) [0];

};
// Do not edit below this line
module.exports = findTheOldest;
