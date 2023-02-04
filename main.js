const url = "https://resume.redberryinternship.ge/api/degrees";

async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();

  for (let i in data) {
    document.getElementById(
      "dro"
    ).innerHTML += `<option value="${data[i].title}">${data[i].title}</option>`;
  }
}
// Calling that async function
getapi(url);
