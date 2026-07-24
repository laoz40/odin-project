const findTheOldest = function (people) {

	const getAge = (person) => {
		let age = person.yearOfDeath
			? person.yearOfDeath - person.yearOfBirth
			: new Date().getFullYear() - person.yearOfBirth;
		return age;
	}

  return people.reduce((oldest, person) => {
		const oldestAge = getAge(oldest);
		const personAge = getAge(person);

    return (oldestAge > personAge) ? oldest : person;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
