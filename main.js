const url = "https://resume.redberryinternship.ge/api/degrees";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  for (let i in data) {
    document.getElementById(
      "dro"
    ).innerHTML += `<option value="${data[i].title}">${data[i].title}</option>`;
  }
}
pos_m = JSON.parse(localStorage.getItem("tanamdebobebi"));
console.log(pos_m);

comp_m = JSON.parse(localStorage.getItem("damsaqmebeli"));
console.log(comp_m);

getapi(url);
document.getElementById("displayer").style.backgroundImage =
  localStorage.getItem("Photo");
document.getElementById("namer_out").innerHTML =
  localStorage.getItem("LastName") + " " + localStorage.getItem("FirstName");
document.getElementById("email_out").innerHTML = localStorage.getItem("E-Mail");
document.getElementById("phone_out").innerHTML =
  localStorage.getItem("Phone_Number");
document.getElementById("info_out").innerHTML =
  localStorage.getItem("about_info");
document.getElementById("chem_see").style.visibility = "visible";
document.getElementById("gamocdileba").style.visibility = "visible";
document.getElementById("Job_out").innerHTML = pos_m[0] + "," + comp_m[0];
document.getElementById("Date_out").innerHTML =
  localStorage.getItem("date1") + " - " + localStorage.getItem("date2");
document.getElementById("ag_out").innerHTML =
  localStorage.getItem("samsaxuris_agwera");
function out1() {
  localStorage.setItem("saswavlebel", document.getElementById("inp10").value);
}
function out2() {
  localStorage.setItem("xarisxi", document.getElementById("dro").value);
}
document.getElementById("saswa").innerHTML =
  localStorage.getItem("saswavlebel") + "," + localStorage.getItem("xarisxi");
document.getElementById("inp10").value = localStorage.getItem("saswavlebel");
document.getElementById("dro").value = localStorage.getItem("xarisxi");

function out3() {
  localStorage.setItem("damtavreba", document.getElementById("chan2").value);
}
document.getElementById("dam_out").innerHTML =
  localStorage.getItem("damtavreba");
document.getElementById("chan2").value = localStorage.getItem("damtavreba");

function out4() {
  localStorage.setItem(
    "swavlis_agwera",
    document.getElementById("inp11").value
  );
}

document.getElementById("swav_agwera").innerHTML =
  localStorage.getItem("swavlis_agwera");
document.getElementById("inp11").value = localStorage.getItem("swavlis_agwera");
function deleteItems() {
  localStorage.clear();
}
