var pos = [];
var comp = [];
var date_st = [];
var date_en = [];
var descr = [];

var pos_m = [];
var comp_m = [];
var date_stm = [];
var date_enm = [];
var descr_m = [];

pos_m = JSON.parse(localStorage.getItem("tanamdebobebi"));
console.log(pos_m);

comp_m = JSON.parse(localStorage.getItem("damsaqmebeli"));
console.log(comp_m);

// date_stm = JSON.parse(localStorage.getItem("dawyebis_tarigi"));
// console.log(date_stm);

for (var i = 0; i < pos_m.length - 1; i++) {
  AddMore();
}

for (var i = 0; i < pos_m.length; i++) {
  pos[i] = pos_m[i];
  comp[i] = comp_m[i];
  document.getElementsByClassName("inp5")[i].value = pos_m[i];
  document.getElementsByClassName("inp6")[i].value = comp_m[i];
}

// for (var i = 0; i < comp_m.length; i++) {
//   document.getElementsByClassName("inp6")[i].value = comp_m[i];
// }

function ValidateJob(a) {
  var regx = /[ა-ჰa-zA-Z]/;
  var Name = document.getElementsByClassName("inp5")[a].value;
  if (regx.test(Name) === false || Name.length < 2) {
    document.getElementsByClassName("AA")[a].style.visibility = "visible";
    document.getElementsByClassName("t1")[a].style.color = "#ef5050";
    document.getElementsByClassName("inp5")[a].style.borderColor = "#ef5050";
    return false;
  } else {
    document.getElementsByClassName("AA")[a].style.visibility = "hidden";
    document.getElementsByClassName("t1")[a].style.color = "black";
    document.getElementsByClassName("inp5")[a].style.borderColor = "#bcbcbc";
  }
}

function ValidateHire(a) {
  var regx = /[ა-ჰa-zA-Z]/;
  var Name = document.getElementsByClassName("inp6")[a].value;
  if (regx.test(Name) === false || Name.length < 2) {
    document.getElementsByClassName("BB")[a].style.visibility = "visible";
    document.getElementsByClassName("t2")[a].style.color = "#ef5050";
    document.getElementsByClassName("inp6")[a].style.borderColor = "#ef5050";
    return false;
  } else {
    document.getElementsByClassName("BB")[a].style.visibility = "hidden";
    document.getElementsByClassName("t2")[a].style.color = "black";
    document.getElementsByClassName("inp6")[a].style.borderColor = "#bcbcbc";
  }
}
function ValidateAl2() {
  var x = document.getElementsByClassName("inp5").length;

  console.log(x);
  keoo = true;
  for (var j = 0; j < x; j++) {
    ValidateJob(j);
    ValidateHire(j);
    dateval1(j);
    dateval2(j);
    agwer(j);
    if (
      ValidateJob(j) == false ||
      ValidateHire(j) == false ||
      dateval1(j) == false ||
      dateval2(j) == false ||
      agwer(j) == false
    ) {
      keoo = false;
    }
  }
  if (keoo == true) {
    location.href = "education.html";
  }
}

function agwer(a) {
  var agwera = document.getElementsByClassName("mokle")[a];
  localStorage.setItem(
    "samsaxuris_agwera",
    document.getElementById("mokle").value
  );
  document.getElementById("ag_out").innerHTML =
    localStorage.getItem("samsaxuris_agwera");
  if (!agwera.value) {
    document.getElementsByClassName("mokle")[a].style.borderColor = "#ef5050";
    document.getElementsByClassName("abus1")[a].style.color = "#ef5050";
    return false;
  } else {
    console.log("scream");
    document.getElementsByClassName("mokle")[a].style.borderColor = "#98e37e";
    document.getElementsByClassName("abus1")[a].style.color = "black";
  }
}

function dateval1(a) {
  var datebeg = document.getElementsByClassName("chan")[a];
  localStorage.setItem("date1", document.getElementById("chan").value);
  if (!datebeg.value) {
    document.getElementsByClassName("dawy")[a].style.color = "#ef5050";
    return false;
  } else {
    document.getElementsByClassName("dawy")[a].style.color = "black";
  }
}
function dateval2(a) {
  var dateend = document.getElementsByClassName("chan1")[a];
  localStorage.setItem("date2", document.getElementById("chan1").value);
  if (!dateend.value) {
    document.getElementsByClassName("damt")[a].style.color = "#ef5050";
    return false;
  } else {
    document.getElementsByClassName("damt")[a].style.color = "black";
  }
}
function outer(x) {
  pos[x] = document.getElementsByClassName("inp5")[x].value;
  localStorage.setItem("tanamdebobebi", JSON.stringify(pos));
}
function outer1(x) {
  comp[x] = document.getElementsByClassName("inp6")[x].value;
  localStorage.setItem("damsaqmebeli", JSON.stringify(comp));
  console.log(comp);
}

function dater() {
  localStorage.setItem("start_date", document.getElementById("chan").value);
  localStorage.setItem("end_date", document.getElementById("chan1").value);
  document.getElementById("Date_out").innerHTML =
    localStorage.getItem("start_date") +
    " - " +
    localStorage.getItem("end_date");
}

document.getElementById("namer_out").innerHTML =
  localStorage.getItem("LastName") + " " + localStorage.getItem("FirstName");
document.getElementById("displayer").style.backgroundImage =
  localStorage.getItem("Photo");
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

var gold_rush = 0;
function AddMore() {
  gold_rush += 1;
  document.getElementsByClassName(
    "CityLights"
  )[0].innerHTML += `<div id="tanamdeboba">
      <div id="t1" class="t1">თანამდებობა</div>
      <div class="TheGreatEscape">
      <input type ="text" pattern="[ა-ჰa-zA-Z].{1,}" id="inp5" class="inp5" placeholder="დეველოპერი, დიზაინერი, ა.შ." onkeyup="ValidateJob(${gold_rush}),outer(${gold_rush}) "/>
      <img class="AA"  src="images/image6.png">
      </div>
      <div id="dis">მინიმუმ 2 სიმბოლო</div>
    </div>

  <div id="damsa">
      <div id="t2" class="t2">დამსაქმებელი</div>
      <div class="TheKid">
        <input type ="text" pattern="[ა-ჰa-zA-Z].{1,}" class="inp6" placeholder="დამსაქმებელი" onkeyup="ValidateHire(${gold_rush}),outer1(${gold_rush})" id="inp6" />
        <img class="BB" src="images/image6.png"> 
      </div>
      
      <div id="dis">მინიმუმ 2 სიმბოლო</div>
    </div>


    <div class="ModernTimes">
      <div id="dates">
      <div id="dawy" class = "dawy"><b>დაწყების რიცხვი</b></div>
      <input type="date" id="chan" class="chan" onchange ="dateval1(${gold_rush})" required />
    </div>
    <div id="dates1" class="damt">
      <div id="damt" class="damt" ><b>დამთავრების რიცხვი</b></div>
      <input type="date" id="chan1" class="chan1" onchange ="dateval2(${gold_rush})"  required />
    </div>
    </div>
    
    
    <div id="agwera">
      <div id="abus1" class="abus1"><b>აღწერა</b></div>
      <textarea id="mokle" class="mokle" onkeyup="agwer(${gold_rush})" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" ></textarea>
    </div>
    <div id="bord"></div>`;
}
function deleteItems() {
  localStorage.clear();
}
