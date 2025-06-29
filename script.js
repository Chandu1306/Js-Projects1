function showMovie() {
  let movie = document.getElementById("movieSelect").value;
  let result = document.getElementById("result");
  switch (movie) {
    case "Vikram":
      result.innerText = "🔥 Vikram is a true LCU legend!";
      break;
    case "Leo":
      result.innerText = "🧊 Leo - Bloody Sweet and Stylish!";
      break;
    case "Khaithi":
      result.innerText = "🔦 Khaithi - Intense and Raw!";
      break;
    default:
      result.innerText = "";
  }
}
