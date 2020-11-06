class User {
  constructor (name, date_of_birth) {
    this.name = name;
    this.date_of_birth = date_of_birth;

    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.currentDay = this.currentDate.getDate();
    this.birthMonth = this.date_of_birth.getMonth();
    this.birthDay = this.date_of_birth.getDate();

  }

  // Returns an Integer representing the user’s current age
  age () {
    const birthYear = this.date_of_birth.getFullYear();
    let yearInteger = this.currentYear-birthYear;

    if (this.birthMonth > this.currentMonth) {
      yearInteger --;
    } else if (this.birthMonth === this.currentMonth) {
      if (this.birthDay > this.currentDay) yearInteger --;
    }

    return yearInteger;
  }

  // Returns a Date object for the user's current upcoming birthday
  next_birthday () {
    const currentYearBirthday = new Date(this.currentYear, this.birthMonth, this.birthDay);
    const currentDateNoHours = new Date(this.currentYear, this.currentMonth, this.currentDay);
    let nextBirthday;

    if (currentYearBirthday < currentDateNoHours) {
      nextBirthday = new Date(this.currentYear+1, this.birthMonth, this.birthDay);
    } else nextBirthday = currentYearBirthday;
    
    return nextBirthday;
  }
}

const today = new Date();
const month = today.getMonth();
const day = today.getDate();

tests = [
  new Date(1986, 0, 1),
  new Date(1988, month, day),
  new Date(1990, 11, 30),
];

function printAges (date) {
  console.log(`${date} => ${new User('Test', date).age()}`);
} 

function printBirthdays (date) {
  console.log(`${date} => ${new User('Test', date).next_birthday()}`);
}

console.log('===== ages =====');
tests.forEach(printAges);

console.log('===== birthdays =====');
tests.forEach(printBirthdays);