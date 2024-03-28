const jsondata = JSON.parse(localStorage.getItem("data"));
const toElement = document.getElementById("to");
const fromElement = document.getElementById("from");
const subjectElement = document.getElementById("subject");
const dateElement = document.getElementById("date");
const tableBody = document.getElementById("table-body");
const downloadBtn = document.getElementById("download");

if (!jsondata) {
  window.location = "../index.html";
}

const { date, from, to, subject, statementArr, finalTotal } = jsondata;

toElement.innerHTML = to;
fromElement.innerHTML = from;
subjectElement.innerHTML = subject;
dateElement.innerHTML = date;

statementArr.forEach((statement) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  td.innerHTML = statement.id;
  td1.innerHTML = statement.statement;
  td2.innerHTML = statement.number;
  td3.innerHTML = statement.price;
  td4.innerHTML = statement.total;
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tableBody.appendChild(tr);
});

const trTotal = document.createElement("tr");

const tdTotal = document.createElement("td");
tdTotal.innerHTML = "المجموع";
tdTotal.style.textAlign = "center";
tdTotal.style.fontWeight = "bold";
tdTotal.setAttribute("colspan", "4");

const tdValue = document.createElement("td");
tdValue.innerHTML = finalTotal;

trTotal.appendChild(tdTotal);
trTotal.appendChild(tdValue);
tableBody.appendChild(trTotal);

downloadBtn.addEventListener("click", () => {
  window.print();
});
