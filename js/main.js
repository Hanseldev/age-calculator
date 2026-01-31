const result = document.querySelector(".result");
const calculateButton = document.querySelector(".btn-calculate");
let birthDay;
let birthMonth;
let birthYear;

datepicker("#date", {
  startDay: 0,
  formatter: (input, date) => {
    birthDay = date.getDate().toString().padStart(2, "0");
    birthMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    birthYear = date.getFullYear();
    input.value = `${birthDay}/${birthMonth}/${birthYear}`;
  },
  maxDate: new Date(),
});

calculateButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (birthDay !== undefined) {
    birthYear = parseInt(birthYear, 10);
    birthMonth = parseInt(birthMonth, 10);
    birthDay = parseInt(birthDay, 10);

    const dt = luxon.DateTime.now();
    const birthDate = luxon.DateTime.fromObject({
      year: birthYear,
      month: birthMonth,
      day: birthDay,
    });

    const diff = dt.diff(birthDate, ["years", "months", "days"]).toObject();

    const month = diff.months;
    const year = diff.years;

    result.innerHTML = `<p>You are <strong>${year} years ${month} months</strong> old</p>`;
  }
});


