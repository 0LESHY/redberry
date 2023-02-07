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
  });
  reader.readAsDataURL(this.files[0]);
});

document.getElementById("displayer").style.backgroundImage =
  localStorage.getItem("Photo");
