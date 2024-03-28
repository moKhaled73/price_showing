let dataForm = document.getElementById("data-form");
let dateInput = document.getElementById("date");
let addStatement = document.getElementById("add-statement");
let inputs = document.getElementById("inputs");

const addNewStatement = (statementObj) => {
  let div = document.createElement("div");
  let statement = document.createElement("input");
  statement.type = "text";
  statement.className = "statement";
  statement.placeholder = "البيان";
  let number = document.createElement("input");
  number.type = "number";
  number.classList = "num-items";
  number.placeholder = "الوحدة و العدد";
  let price = document.createElement("input");
  price.type = "number";
  price.className = "price";
  price.placeholder = "سعر الوحدة";
  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "حذف";
  removeBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  if (statementObj) {
    statement.value = statementObj.statement;
    number.value = statementObj.number;
    price.value = statementObj.price;
  }
  div.appendChild(statement);
  div.appendChild(number);
  div.appendChild(price);
  div.appendChild(removeBtn);
  inputs.appendChild(div);
};

if (localStorage.getItem("data")) {
  let data = JSON.parse(localStorage.getItem("data"));
  dataForm.from.value = data.from;
  dataForm.to.value = data.to;
  dataForm.subject.value = data.subject;
  dataForm.date.value = data.date;
  data.statementArr.forEach((statementObj) => {
    addNewStatement(statementObj);
  });
}

addStatement.addEventListener("click", (e) => {
  e.preventDefault();
  addNewStatement();
});

dataForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let to = document.getElementById("to").value;
  let from = document.getElementById("from").value;
  let subject = document.getElementById("subject").value;
  let date = document.getElementById("date").value;

  let statement = document.querySelectorAll(".statement");
  let number = document.querySelectorAll(".num-items");
  let price = document.querySelectorAll(".price");

  let statementArr = [];
  let finalTotal = 0;
  for (let i = 0; i < statement.length; i++) {
    let obj = {};
    obj.id = i + 1;
    obj.statement = statement[i].value;
    obj.number = number[i].value;
    obj.price = price[i].value;
    obj.total = price[i].value * number[i].value;
    finalTotal += obj.total;
    statementArr.push(obj);
  }

  let data = {
    to,
    from,
    subject,
    date,
    finalTotal,
    statementArr,
  };
  let jsonData = JSON.stringify(data);
  localStorage.setItem("data", jsonData);
  document.location.href = "../pages/pdf.html";
});
