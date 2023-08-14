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

function getInfoEmployee() {}
