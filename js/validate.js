function validNum(idErr, value) {
  if (!/\D/.test(value)) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Tài khoản không hợp lệ";
    return false;
  }
}

function validStr(idErr, value) {
  var letter = /^[A-Za-z]+$/;
  if (value.match(letter)) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Tên không hợp lệ";
    return false;
  }
}

function validPass(idErr, value) {
  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  if (value.match(reg)) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Mật khẩu không hợp lệ";
    return false;
  }
}

function validDatepicker(idErr, value) {
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (value.match(date_regex)) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Ngày làm việc không hợp lệ";
    return false;
  }
}

function validSal(idErr, value) {
  if (value >= 1e6 && value <= 20e6) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Lương không hợp lệ";
    return false;
  }
}

function validPosition(idErr, value) {
  if (value == "Sếp" || value == "Trưởng phòng" || value == "Nhân viên") {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Chức vụ không hợp lệ";
    return false;
  }
}

function validTime(idErr, value) {
  if (value < 80) {
    document.getElementById(idErr).innerText =
      "Làm gì ít z cha, chắc đuổi quá!!";
    return false;
  } else if (value > 200) {
    document.getElementById(idErr).innerText =
      "Làm nhiều z tiền đâu trả lương cha nụi, chắc cũng đuổi luôn quá =)))";
    return false;
  } else document.getElementById(idErr).innerText = "";
  return true;
}

function validNull(idErr, value) {
  if (value.length == 0) {
    document.getElementById(idErr).innerText = "Nội dung không được để trống";
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    return true;
  }
}

function validLength(min, max, idErr, value) {
  var length = value.length;
  if (length < min || length > max) {
    document.getElementById(
      idErr
    ).innerText = `Nội dung phải từ ${min} đến ${max} ký tự`;
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    return true;
  }
}

function validEmail(idErr, value) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(value)) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr), (innerText = "Email không hợp lệ");
    return false;
  }
}
