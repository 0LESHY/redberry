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

function ValidatePhone() {
  var regx = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  var phone = document.getElementById("inp3").value;

  if (regx.test(phone) === false) {
    document.getElementById("A").style.visibility = "visible";
    document.getElementById("pho").style.color = "#ef5050";
    // document.getElementById("inp3").style.borderColor = "#ef5050";
  } else {
    document.getElementById("A").style.visibility = "hidden";
    document.getElementById("pho").style.color = "black";
  }
}

function ValidateEmail() {
  //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
  var mail = document.getElementById("inp2").value;

  if (regx.test(mail) === false) {
    document.getElementById("B").style.visibility = "visible";
    document.getElementById("el").style.color = "#ef5050";
    // document.getElementById("inp2").style.borderColor = "#ef5050";
    // document.querySelector('#button2').disabled = true;
  } else {
    // document.querySelector("#button2").onclick = function () {
    document.getElementById("B").style.visibility = "hidden";
    document.getElementById("el").style.color = "black";
  }
}

function ValidateName() {
  console.log("asasf");
  var regx = /[ა-ჰ]/;
  var Name = document.getElementById("inp").value;

  if (regx.test(Name) === false || Name.length < 2) {
    document.getElementById("C").style.visibility = "visible";
    document.getElementById("ty").style.color = "#ef5050";
    // document.getElementById("inp").style.borderColor = "#ef5050";
    // document.getElementById("inp").style.borderColor = "#ef5050";
  } else {
    document.getElementById("C").style.visibility = "hidden";
    document.getElementById("ty").style.color = "black";
    // document.getElementById("inp").style.borderColor = "#98e37e";
  }
}

function ValidateSurName() {
  var regx = /[ა-ჰ]/;
  var surname = document.getElementById("inp0").value;

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
