function ValidateJob() {
  var regx = /[ა-ჰa-zA-Z]/;
  var Name = document.getElementById("inp5").value;

  if (regx.test(Name) === false || Name.length < 2) {
    document.getElementById("AA").style.visibility = "visible";
    document.getElementById("t1").style.color = "#ef5050";
    // document.getElementById("inp").style.borderColor = "#ef5050";
  } else {
    document.getElementById("AA").style.visibility = "hidden";
    document.getElementById("t1").style.color = "black";
    // document.getElementById("inp").style.borderColor = "#98e37e";
  }
}
function ValidateHire() {
  var regx = /[ა-ჰa-zA-Z]/;
  var Name = document.getElementById("inp6").value;

  if (regx.test(Name) === false || Name.length < 2) {
    document.getElementById("BB").style.visibility = "visible";
    document.getElementById("t2").style.color = "#ef5050";
    // document.getElementById("inp").style.borderColor = "#ef5050";
  } else {
    document.getElementById("BB").style.visibility = "hidden";
    document.getElementById("t2").style.color = "black";
    // document.getElementById("inp").style.borderColor = "#98e37e";
  }
}

function ValidateAl() {
  var regx = /[ა-ჰa-zA-Z]/;
  var position = document.getElementById("inp5").value;
  var damsaqmebeli = document.getElementById("inp6").value;

  var datebeg = document.getElementById("chan");
  var dateend = document.getElementById("chan1");
  var agwera = document.getElementById("mokle");

  const eds1 = [position, damsaqmebeli];
  const eds2 = ["AA", "BB"];
  const eds3 = ["t1", "t2"];

  if (
    regx.test(position) === false ||
    regx.test(damsaqmebeli) === false ||
    !datebeg.value ||
    !dateend.value ||
    !agwera.value
  ) {
    for (var i = 0; i < 2; i++) {
      if (regx.test(eds1[i]) === false) {
        document.getElementById(eds2[i]).style.visibility = "visible";
        document.getElementById(eds3[i]).style.color = "#ef5050";
      }
    }
    if (!agwera.value) {
      document.getElementById("mokle").style.borderColor = "#ef5050";
      document.getElementById("abus1").style.color = "#ef5050";
    } else {
      document.getElementById("mokle").style.borderColor = "#98e37e";
      document.getElementById("abus1").style.color = "black";
    }
    if (!dateend.value) {
      document.getElementById("damt").style.color = "#ef5050";
    } else {
      document.getElementById("damt").style.color = "#black";
    }
    if (!datebeg.value) {
      document.getElementById("dawy").style.color = "#ef5050";
    } else {
      document.getElementById("dawy").style.color = "black";
    }
  } else {
    location.href = "education.html";
  }
}

function agwer() {
  var agwera = document.getElementById("mokle");
  if (!agwera.value) {
    document.getElementById("mokle").style.borderColor = "#bcbcbc";
    document.getElementById("abus1").style.color = "black";
  } else {
    document.getElementById("mokle").style.borderColor = "#98e37e";
    document.getElementById("abus1").style.color = "black";
  }
}

function dateval1() {
  var datebeg = document.getElementById("chan");
  if (!datebeg.value) {
    document.getElementById("dawy").style.color = "#ef5050";
  } else {
    document.getElementById("dawy").style.color = "black";
  }
}
function dateval2() {
  var dateend = document.getElementById("chan1");
  if (!dateend.value) {
    document.getElementById("damt").style.color = "#ef5050";
  } else {
    document.getElementById("damt").style.color = "black";
  }
}
