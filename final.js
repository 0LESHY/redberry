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

pos_m = JSON.parse(localStorage.getItem("tanamdebobebi"));
console.log(pos_m);

comp_m = JSON.parse(localStorage.getItem("damsaqmebeli"));
console.log(comp_m);
document.getElementById("Job_out").innerHTML = pos_m[0] + "," + comp_m[0];
document.getElementById("Date_out").innerHTML =
  localStorage.getItem("date1") + " - " + localStorage.getItem("date2");
document.getElementById("ag_out").innerHTML =
  localStorage.getItem("samsaxuris_agwera");
document.getElementById("saswa").innerHTML =
  localStorage.getItem("saswavlebel") + "," + localStorage.getItem("xarisxi");

document.getElementById("swav_agwera").innerHTML =
  localStorage.getItem("swavlis_agwera");
document.getElementById("dam_out").innerHTML =
  localStorage.getItem("damtavreba");

function deleteItems() {
  localStorage.clear();
}
