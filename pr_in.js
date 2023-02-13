const image_input = document.getElementById("image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.getElementById(
      "displayer"
    ).style.backgroundImage = `URL(${uploaded_image})`;
    localStorage.setItem("Photo", `URL(${uploaded_image})`);
    document.getElementById("E").style.visibility = "hidden";
    document.getElementById("up").style.color = "black";
  });
  reader.readAsDataURL(this.files[0]);
});

document.getElementById("displayer").style.backgroundImage =
  localStorage.getItem("Photo");
document.getElementById("namer_out").innerHTML =
  localStorage.getItem("LastName") + " " + localStorage.getItem("FirstName");
document.getElementById("inp").value = localStorage.getItem("LastName");
document.getElementById("inp0").value = localStorage.getItem("FirstName");
document.getElementById("email_out").innerHTML = localStorage.getItem("E-Mail");
document.getElementById("inp2").value = localStorage.getItem("E-Mail");
document.getElementById("phone_out").innerHTML =
  localStorage.getItem("Phone_Number");

document.getElementById("inp1").value = localStorage.getItem("about_info");
document.getElementById("info_out").innerHTML =
  localStorage.getItem("about_info");
document.getElementById("gamocdileba").style.visibility = "visible";
document.getElementById("Job_out").innerHTML = pos_m[0] + "," + comp_m[0];
document.getElementById("Date_out").innerHTML =
  localStorage.getItem("date1") + " - " + localStorage.getItem("date2");
document.getElementById("ag_out").innerHTML =
  localStorage.getItem("samsaxuris_agwera");

document.getElementById("inp3").value = localStorage.getItem("Phone_Number");
function shesaxeb() {
  localStorage.setItem("about_info", document.getElementById("inp1").value);
  if (document.getElementById("inp1").value == "") {
    document.getElementById("chem_se").style.visibility = "hidden";
  } else {
    document.getElementById("chem_se").style.visibility = "visible";
  }
  document.getElementById("info_out").innerHTML =
    localStorage.getItem("about_info");
}
if (document.getElementById("inp1").value == "") {
  document.getElementById("chem_se").style.visibility = "hidden";
} else {
  document.getElementById("chem_se").style.visibility = "visible";
}

function ValidatePhone() {
  var regx = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  var phone = document.getElementById("inp3").value;
  localStorage.setItem("Phone_Number", document.getElementById("inp3").value);
  document.getElementById("phone_out").innerHTML =
    localStorage.getItem("Phone_Number");
  if (regx.test(phone) === false) {
    document.getElementById("A").style.visibility = "visible";
    document.getElementById("pho").style.color = "#ef5050";
  } else {
    document.getElementById("A").style.visibility = "hidden";
    document.getElementById("pho").style.color = "black";
  }
  if (document.getElementById("inp3").value == "") {
    document.getElementById("PH").style.visibility = "hidden";
  } else {
    document.getElementById("PH").style.visibility = "visible";
  }
}
if (document.getElementById("inp3").value == "") {
  document.getElementById("PH").style.visibility = "hidden";
} else {
  document.getElementById("PH").style.visibility = "visible";
}

function ValidateEmail() {
  var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
  var mail = document.getElementById("inp2").value;
  localStorage.setItem("E-Mail", document.getElementById("inp2").value);
  document.getElementById("email_out").innerHTML =
    localStorage.getItem("E-Mail");
  if (regx.test(mail) === false) {
    document.getElementById("B").style.visibility = "visible";
    document.getElementById("el").style.color = "#ef5050";
  } else {
    document.getElementById("B").style.visibility = "hidden";
    document.getElementById("el").style.color = "black";
  }

  if (document.getElementById("inp2").value == "") {
    document.getElementById("EM").style.visibility = "hidden";
  } else {
    document.getElementById("EM").style.visibility = "visible";
  }
}
if (document.getElementById("inp2").value == "") {
  document.getElementById("EM").style.visibility = "hidden";
} else {
  document.getElementById("EM").style.visibility = "visible";
}

function ValidateName() {
  console.log("asasf");
  var regx = /[ა-ჰ]/;
  var Name = document.getElementById("inp").value;
  localStorage.setItem("LastName", document.getElementById("inp").value);
  document.getElementById("namer_out").innerHTML =
    localStorage.getItem("LastName") + " " + localStorage.getItem("FirstName");
  if (regx.test(Name) === false || Name.length < 2) {
    document.getElementById("C").style.visibility = "visible";
    document.getElementById("ty").style.color = "#ef5050";
  } else {
    document.getElementById("C").style.visibility = "hidden";
    document.getElementById("ty").style.color = "black";
  }
}

function ValidateSurName() {
  var regx = /[ა-ჰ]/;
  var surname = document.getElementById("inp0").value;
  localStorage.setItem("FirstName", document.getElementById("inp0").value);
  document.getElementById("namer_out").innerHTML =
    localStorage.getItem("LastName") + " " + localStorage.getItem("FirstName");

  if (regx.test(surname) === false || surname.length < 2) {
    document.getElementById("D").style.visibility = "visible";
    document.getElementById("ty1").style.color = "#ef5050";
    // document.getElementById("inp0").style.borderColor = "#ef5050";
  } else {
    document.getElementById("D").style.visibility = "hidden";
    document.getElementById("ty1").style.color = "black";
  }
}
function ValidatePhoto() {
  if (
    localStorage.getItem("Photo") == null ||
    localStorage.getItem("Photo") == ""
  ) {
    document.getElementById("E").style.visibility = "visible";
    document.getElementById("up").style.color = "#ef5050";
  } else {
    document.getElementById("E").style.visibility = "hidden";
    document.getElementById("up").style.color = "black";
  }
}

function ValidateAll() {
  var regx = /[ა-ჰ]/;
  var regx1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
  var regx2 = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  var Name = document.getElementById("inp").value;
  var surname = document.getElementById("inp0").value;
  var mail = document.getElementById("inp2").value;
  var phone = document.getElementById("inp3").value;
  const vals = [Name, surname, mail, phone];
  const rexs = [regx, regx, regx1, regx2];
  const tri = ["C", "D", "B", "A"];
  const name_co = ["ty", "ty1", "el", "pho"];
  ValidatePhoto();
  if (
    regx.test(Name) === false ||
    regx.test(surname) === false ||
    regx1.test(mail) === false ||
    regx2.test(phone) === false
  ) {
    for (var i = 0; i <= 3; i++) {
      if (rexs[i].test(vals[i]) === false) {
        document.getElementById(tri[i]).style.visibility = "visible";
        document.getElementById(name_co[i]).style.color = "#ef5050";
      } else {
        document.getElementById(tri[i]).style.visibility = "hidden";
        document.getElementById(name_co[i]).style.color = "black";
      }
    }
  } else if (
    localStorage.getItem("Photo") == null ||
    localStorage.getItem("Photo") == ""
  ) {
    if (
      localStorage.getItem("Photo") == null ||
      localStorage.getItem("Photo") == ""
    ) {
      document.getElementById("E").style.visibility = "visible";
      document.getElementById("up").style.color = "#ef5050";
    } else {
      document.getElementById("E").style.visibility = "hidden";
      document.getElementById("up").style.color = "black";
    }
  } else {
    location.href = "experiance.html";
  }
}
function deleteItems() {
  localStorage.clear();
}
