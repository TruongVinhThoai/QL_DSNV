function renderEmployee(render) {
  var contentHTML = "";
  render.forEach((item) => {
    var contentTr = `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.datepicker}</td>
    <td>${item.position}</td>
    <td>${item.total}</td>
    <td>${item.category}</td>
    </tr>`;

    contentHTML += contentTr;
  });
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function totalSalary(sal, pos) {
  if (pos == "Sếp") {
    return (sal = sal * 3);
  } else if (pos == "Trưởng phòng") {
    return (sal = sal * 2);
  } else if (pos == "Nhân viên") {
    return sal;
  }
  return (document.getElementById(
    "tbChucVu"
  ).innerHTML = `Chuc vu khong hop le`);
}

function cate(time) {
  var s = "xuat sac";
  var a = "gioi";
  var b = "kha";
  var c = "trung binh";
  if (time < 160) {
    return c;
  } else if (time < 176) {
    return b;
  } else if (time < 192) {
    return a;
  } else return s;
}

function getInfoEmployee() {
  var id = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value;
  var total = totalSalary(salary, position);
  var category = cate(time);

  // var total = 20;
  // var category = "gioi";

  return new Employee(
    id,
    name,
    email,
    pass,
    datepicker,
    salary,
    position,
    time,
    total,
    category
  );
}

function showInfoEmployee(emp) {
  document.getElementById("tknv").value = emp.id;
  document.getElementById("name").value = emp.name;
  document.getElementById("email").value = emp.email;
  document.getElementById("password").value = emp.pass;
  document.getElementById("datepicker").value = emp.datepicker;
  document.getElementById("luongCB").value = emp.salary;
  document.getElementById("chucvu").value = emp.position;
  document.getElementById("gioLam").value = emp.time;
}

function findEmployee(idEmp, arrEmp) {
  return arrEmp.findIndex((emp) => {
    return emp.id == idEmp;
  });
}
