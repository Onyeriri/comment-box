const textarea = document.getElementsByTagName("textarea");
const maxLength = textarea[0].maxLength;
const comment = document.getElementById("comments");

// function that displays and calculate the word length
const wordLength = () => {
  document.querySelector(
    "span"
  ).innerHTML = `${comment.value.length} / ${maxLength}`;

  document.querySelector("span").style.display = "block";

  // checks and display a red border as warning when user comments equal the maximum word count
  if (comment.value.length === maxLength) {
    document.querySelector("textarea").style.border = "5px solid red";

    setTimeout(() => {
      document.querySelector("textarea").style.border = "5px solid #fff";
    }, 1500);
  }
};

// function that collects and submit user input
const formSubmit = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const comment = document.getElementsByTagName("textarea")[0].value;

  displayOutput(nameInput, comment);
};

// function that display user input on the page
const displayOutput = (nameInput, comment) => {
  if (nameInput.trim() !== "" && comment.trim() !== "") {
    document.getElementById("name-output").innerText = nameInput;
    document.getElementById("comment-output").innerText = comment;
    document.getElementById("comment-output").style.display = "block";
    document.getElementById("form-element").reset();
    document.querySelector("span").innerHTML = `${0} / ${140}`;
    document.getElementById("comment-box").style.display = "block";
  } else {
    document.getElementById("name").style.border = "5px solid red";
    document.getElementById("email").style.border = "5px solid red";
    document.getElementById("comments").style.border = "5px solid red";
    document.getElementById("warning").style.backgroundColor = "red";
    document.getElementById("warning").style.color = "white";
    document.getElementById("warning").style.display = "block";

    // function that clears the red border if nameInput and comments are empty
    setTimeout(() => {
      document.getElementById("name").style.border = "5px solid #fff";
      document.getElementById("email").style.border = "5px solid #fff";
      document.getElementById("comments").style.border = "5px solid #fff";
      document.getElementById("warning").style.display = "none";
    }, 1500);
  }
};
