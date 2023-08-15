var arrEmployee = [];

var jsondata = localStorage.getItem("listEmployee");

if (jsondata != null) {
  var list = JSON.parse(jsondata);
  arrEmployee = list.map((emp) => {
    return new Employee(
      emp.id,
      emp.name,
      emp.email,
      emp.pass,
      emp.datepicker,
      emp.salary,
      emp.position,
      emp.time,
      emp.total,
      emp.category
    );
  });
  renderEmployee(arrEmployee);
}

function addEmployee() {
  var emp = getInfoEmployee();

  arrEmployee.push(emp);
  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
  renderEmployee(arrEmployee);
  console.log(
    "🚀 ~ file: main.js:30 ~ addEmployee ~ arrEmployee:",
    arrEmployee
  );
}
