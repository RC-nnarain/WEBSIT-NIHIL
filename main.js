//Input
document.getElementById("btn").addEventListener("click", btnClicked);
let score = 0;

function btnClicked() {
  //declare variables
  let ans1 = document.getElementById("question-1").value.toLowerCase();
  let ans2 = document.getElementById("question-2").value.toLowerCase();
  let ans3 = document.getElementById("question-3").value.toLowerCase();
  let ans4 = document.getElementById("question-4").value.toLowerCase();

  if (ans1 === "third person" || ans1 === "third person perspective") {
    // results
    document.getElementById("output-1").innerHTML = `👍`;
    score = score + 1;
  } else if (ans1 !== "third person" || ans1 !== "third person perspective") {
    // results
    document.getElementById("output-1").innerHTML = `👎`;
  }
  if (ans2 === "garena") {
    // results
    document.getElementById("output-2").innerHTML = `👍`;
    score = score + 1;
  } else if (ans2 !== "garena") {
    // results
    document.getElementById("output-2").innerHTML = `👎`;
  }
  if (ans3 === "pubg mobile" || ans3 === "pubg") {
    // results
    document.getElementById("output-3").innerHTML = `👍`;
    score = score + 1;
  } else if (ans3 !== "pubg mobile" || ans3 !== "pubg") {
    // results
    document.getElementById("output-3").innerHTML = `👎`;
  }
  if (ans4 === "28/09/21" || ans4 === "09/29/21") {
    // results
    document.getElementById("output-4").innerHTML = `👍`;
    score = score + 1;
  } else if (ans4 !== "28/09/21" || ans4 !== "09/29/21") {
    // results
    document.getElementById("output-4").innerHTML = `👎`;
  }
  if (score > 2) {
    document.getElementById("Results").innerHTML =
      score + "/4 (" + (score / 4) * 100 + "%) Good Job!";
    score = 0;
  }
  if (score < 3) {
    document.getElementById("Results").innerHTML =
      score + "/4 (" + (score / 4) * 100 + "%) You have failed!";
    score = 0;
  }
}
