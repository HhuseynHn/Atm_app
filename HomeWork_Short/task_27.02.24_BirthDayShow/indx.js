/** @format */

let peoples = [
  {
    id: 1,
    name: "Huseyn",
    surname: "Huseynov",
    birthday: {
      day: 16,
      month: 10,
      year: 1980,
    },
    weight: 90,
    height: 180,
    citiezen: "Italian",
    country: "Italy",
    city: "Roma",
    birthPlace: "Italy",
    foo: function () {
      let dayResdium = today.day - this.birthday.day;
      let monthResdium = today.month - this.birthday.month;
      let ageIncompletle = 0;
      let residiumMonth = () => {
        if (dayResdium <= 0) {
          if (monthResdium > 0) {
            return 12 - Math.abs(today.month - this.birthday.month);
          } else {
            return Math.abs(today.month - this.birthday.month);
          }
        } else {
          if (monthResdium > 0) {
            return 12 - Math.abs(today.month - this.birthday.month) - 1;
          } else if (monthResdium == 0 && dayResdium <= 0) {
            return Math.abs(today.month - this.birthday.month);
          } else {
            return 12 - Math.abs(today.month - this.birthday.month) - 1;
          }
        }
      };
      let residiumDay = () => {
        if (dayResdium <= 0) {
          return Math.abs(this.birthday.day - today.day);
        } else {
          return 30 - Math.abs(this.birthday.day - today.day);
        }
      };
      let residiumYear = () => {
        ageIncompletle = today.year - this.birthday.year;
        if (today.month < this.birthday.month) {
          ageIncompletle = today.year - this.birthday.year;
        } else if (
          today.month <= this.birthday.month &&
          today.day <= this.birthday.day
        ) {
          ageIncompletle = this.birthday.year - today.year;
        } else {
          ageIncompletle = ageIncompletle + 1;
        }
        return Math.abs(ageIncompletle);
      };

      return ` ${residiumYear()} yasi tamam olmagina ${residiumMonth()} ay ${residiumDay()} gun qalib`;
    },
  },
  {
    id: 2,
    name: "Vika",
    surname: "Melecia",
    birthday: {
      day: 10,
      month: 11,
      year: 1989,
    },
    weight: 85,
    height: 170,
    citiezen: "German",
    country: "Germany",
    city: "Berlin",
    birthPlace: "Frankfurt",
    foo: function () {
      let dayResdium = today.day - this.birthday.day;
      let monthResdium = today.month - this.birthday.month;
      let ageIncompletle = 0;
      let residiumMonth = () => {
        if (dayResdium <= 0) {
          if (monthResdium > 0) {
            return 12 - Math.abs(today.month - this.birthday.month);
          } else {
            return Math.abs(today.month - this.birthday.month);
          }
        } else {
          if (monthResdium > 0) {
            return 12 - Math.abs(today.month - this.birthday.month) - 1;
          } else if (monthResdium == 0 && dayResdium <= 0) {
            return Math.abs(today.month - this.birthday.month);
          } else {
            return 12 - Math.abs(today.month - this.birthday.month) - 1;
          }
        }
      };
      let residiumDay = () => {
        if (dayResdium <= 0) {
          return Math.abs(this.birthday.day - today.day);
        } else {
          return 30 - Math.abs(this.birthday.day - today.day);
        }
      };
      let residiumYear = () => {
        ageIncompletle = today.year - this.birthday.year;
        if (today.month < this.birthday.month) {
          ageIncompletle = today.year - this.birthday.year;
        } else if (
          today.month <= this.birthday.month &&
          today.day <= this.birthday.day
        ) {
          ageIncompletle = this.birthday.year - today.year;
        } else {
          ageIncompletle = ageIncompletle + 1;
        }
        return Math.abs(ageIncompletle);
      };

      return ` ${residiumYear()} yasi tamam olmagina ${residiumMonth()} ay ${residiumDay()} gun qalib`;
    },
  },
  {
    id: 3,
    name: "Jek",
    surname: "Jenny",
    birthday: {
      day: 05,
      month: 06,
      year: 1995,
    },
    weight: 70,
    height: 175,
    citiezen: "English",
    country: "England",
    city: "London",
    birthPlace: "Bristol",
    foo: function () {
      let dayResdium = today.day - this.birthday.day;
      let monthResdium = today.month - this.birthday.month;
      let ageIncompletle = 0;
      let residiumMonth = () => {
        if (dayResdium <= 0) {
          if (monthResdium > 0) {
            return 12 - Math.abs(today.month - this.birthday.month);
          } else {
            return Math.abs(today.month - this.birthday.month);
          }
        } else {
          if (monthResdium > 0) {
            return 12 - Math.abs(today.month - this.birthday.month) - 1;
          } else if (monthResdium == 0 && dayResdium <= 0) {
            return Math.abs(today.month - this.birthday.month);
          } else {
            return 12 - Math.abs(today.month - this.birthday.month) - 1;
          }
        }
      };
      let residiumDay = () => {
        if (dayResdium <= 0) {
          return Math.abs(this.birthday.day - today.day);
        } else {
          return 30 - Math.abs(this.birthday.day - today.day);
        }
      };
      let residiumYear = () => {
        ageIncompletle = today.year - this.birthday.year;
        if (today.month < this.birthday.month) {
          ageIncompletle = today.year - this.birthday.year;
        } else if (
          today.month <= this.birthday.month &&
          today.day <= this.birthday.day
        ) {
          ageIncompletle = this.birthday.year - today.year;
        } else {
          ageIncompletle = ageIncompletle + 1;
        }
        return Math.abs(ageIncompletle);
      };

      return ` ${residiumYear()} yasi tamam olmagina ${residiumMonth()} ay ${residiumDay()} gun qalib`;
    },
  },
];
let today = {
  day: 15,
  month: 11,
  year: 2025,
};

let result = (data) => {
  let final = data.map((el) => el.foo());

  return final;
};

let getPersonData = (id, data) => {
  let personIdIndex = data.findIndex((el) => el.id == id);

  if (personIdIndex == -1) {
    return {
      success: false,
      massage: "Person not found",
    };
  }
  let update = {
    birthday: peoples[personIdIndex].foo(),
  };
  const findData = peoples[personIdIndex];

  const updatePerson = {
    ...findData,
    ...update,
  };
  peoples[personIdIndex] = updatePerson;
  return {
    success: true,
    massage: "Person found",
    data: peoples[personIdIndex],
  };
};

console.log(getPersonData(prompt("Enter person ID"), peoples));
