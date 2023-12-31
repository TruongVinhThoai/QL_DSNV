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
    <td class="btn btn-info" onclick="editEmployee('${item.id}')">Sửa</td>
    <td class="btn btn-danger" onclick="delEmployee('${item.id}')">Xóa</td>
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
  } else pos == "Nhân viên";
  return sal * 1;
}

function cate(time) {
  var s = "Xuất Sắc";
  var a = "Giỏi";
  var b = "Khá";
  var c = "Trung Bình";
  if (time < 160) {
    return c;
  } else if (time < 176) {
    return b;
  } else if (time < 192) {
    return a;
  } else return s;
}

function formatTotalSalaryWithCommas(number) {
  return number.toLocaleString();
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
  var total =
    formatTotalSalaryWithCommas(totalSalary(salary, position)) + " VNĐ";
  var category = cate(time);

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

function getLocal() {
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
}

function showInfoEmployee(emp) {
  getLocal();

  var index = findEmployee(emp, arrEmployee);
  var employ = arrEmployee[index];

  document.getElementById("tknv").value = employ.id;
  document.getElementById("name").value = employ.name;
  document.getElementById("email").value = employ.email;
  document.getElementById("password").value = employ.pass;
  document.getElementById("datepicker").value = employ.datepicker;
  document.getElementById("luongCB").value = employ.salary;
  document.getElementById("chucvu").value = employ.position;
  document.getElementById("gioLam").value = employ.time;
}

function resetFormEmployee() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "Chọn chức vụ";
  document.getElementById("gioLam").value = "";
  document.getElementById("tknv").disabled = false;

  document.getElementById("tbTKNV").innerText = "";
  document.getElementById("tbTen").innerText = "";
  document.getElementById("tbEmail").innerText = "";
  document.getElementById("tbMatKhau").innerText = "";
  document.getElementById("tbNgay").innerText = "";
  document.getElementById("tbLuongCB").innerText = "";
  document.getElementById("tbChucVu").innerText = "";
  document.getElementById("tbGiolam").innerText = "";
}

function findEmployee(idEmp, arrEmp) {
  return arrEmp.findIndex((emp) => {
    return emp.id == idEmp;
  });
}
