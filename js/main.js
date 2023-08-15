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

  //Start Validate

  var isValid =
    validLength(4, 6, "tbTKNV", emp.id) &
    validNum("tbTKNV", emp.id) &
    validNull("tbTKNV", emp.id) &
    validStr("tbTen", emp.name) &
    validNull("tbTen", emp.name) &
    validEmail("tbEmail", emp.email) &
    validNull("tbEmail", emp.email) &
    validPass("tbMatKhau", emp.pass) &
    validDatepicker("tbNgay", emp.datepicker) &
    validNull("tbNgay", emp.datepicker) &
    validSal("tbLuongCB", emp.salary) &
    validNull("tbLuongCB", emp.salary) &
    validPosition("tbChucVu", emp.position) &
    validTime("tbGiolam", emp.time) &
    validNull("tbGiolam", emp.time);

  if (!isValid) return;

  arrEmployee.push(emp);
  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
  renderEmployee(arrEmployee);
}

function delEmployee(id) {
  var index = findEmployee(id, arrEmployee);
  arrEmployee.splice(index, 1);

  renderEmployee(arrEmployee);
  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
}

function editEmployee(id) {
  var index = findEmployee(id, arrEmployee);
  var emp = arrEmployee[index];
  showInfoEmployee(emp);
  document.getElementById("txtMaSV").disabled = true;
}

function updateEmployee() {
  var employee = getInfoEmployee();
  var index = findEmployee(employee.id, arrEmployee);
  arrEmployee[index] = employee;

  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
  renderEmployee(arrEmployee);
}
